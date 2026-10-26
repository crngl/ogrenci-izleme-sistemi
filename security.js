/* DOMPurify is vendored with its license. Never execute markup-provided handlers. */
const uiActions = new Map();
const actionEvents = ["click", "change", "submit", "input", "keydown"];
let actionCleanupQueued = false;

function uiAction(type, callback) {
  if (!actionEvents.includes(type) || typeof callback !== "function") throw new Error("Invalid UI action");
  const id = crypto.randomUUID();
  uiActions.set(id, { type, callback });
  return `data-ui-${type}="${id}"`;
}

function sanitizeHTML(html) {
  if (!window.DOMPurify) throw new Error("Güvenli görüntüleme bileşeni yüklenemedi.");
  return DOMPurify.sanitize(String(html ?? ""), {
    USE_PROFILES: { html: true, svg: true, svgFilters: false },
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "base", "link", "meta"],
    FORBID_ATTR: ["srcdoc", "formaction", "action", "autofocus"],
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });
}

function setSafeHtml(element, html) {
  if (!element) return;
  element.innerHTML = sanitizeHTML(html);
  if (actionCleanupQueued) return;
  actionCleanupQueued = true;
  queueMicrotask(() => {
    actionCleanupQueued = false;
    const live = new Set();
    for (const type of actionEvents) {
      document.querySelectorAll(`[data-ui-${type}]`).forEach(node => live.add(node.getAttribute(`data-ui-${type}`)));
    }
    for (const id of uiActions.keys()) if (!live.has(id)) uiActions.delete(id);
  });
}

for (const type of actionEvents) {
  document.addEventListener(type, (event) => {
    for (const element of event.composedPath()) {
      if (!(element instanceof Element)) continue;
      const action = uiActions.get(element.getAttribute(`data-ui-${type}`));
      if (!action || action.type !== type) continue;
      if (type === "submit") event.preventDefault();
      const scopedEvent = new Proxy(event, {
        get(target, property) {
          if (property === "currentTarget") return element;
          const value = Reflect.get(target, property, target);
          return typeof value === "function" ? value.bind(target) : value;
        },
      });
      try {
        Promise.resolve(action.callback(scopedEvent, element)).catch(error => {
          console.error("UI action failed", error);
          alert("İşlem tamamlanamadı. Lütfen tekrar deneyin.");
        });
      } catch (error) {
        console.error("UI action failed", error);
      }
      if (event.cancelBubble) break;
    }
  });
}
