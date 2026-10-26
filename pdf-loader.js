window.pdfjsReady = import("./vendor/pdf.min.mjs").then((library) => {
  window.pdfjsLib = library;
  return library;
});
