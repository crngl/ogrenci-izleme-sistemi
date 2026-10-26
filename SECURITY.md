# Security and verification

Verification date: 2026-10-26. This source distribution contains no production database connection or user data.

## Controls

- Public demo uses its own session storage and does not create a Supabase client. Demo exit/reset clears its working records. Real school data requires authentication.
- Supabase verifies the user before a saved session unlocks the real panel. Cached membership is never accepted if server verification fails. The SDK alone owns token persistence; tokens are not copied to cookies.
- School caches are separated by school and user ID. Shared state cannot override the configured Supabase destination.
- The fresh-install SQL enables row-level security. System administrators can manage schools; approved school members are limited to their school. Teachers can read/write only approved class snapshots. Pending/removed users cannot read school records. Whole-school snapshots are restricted to full-school roles.
- Membership changes pass checked RPCs. A principal cannot appoint another principal, modify a different school's members, or promote their own account. System administrator accounts are provisioned in SQL Editor, never through public registration.
- Class writes validate the school stamp, class, referenced student IDs and excluded private arrays inside the JSON payload.
- Text values are escaped. DOMPurify protects HTML sinks. UI actions use registered callbacks instead of executable HTML event attributes. Browser security headers disable inline event handlers and framing on supported hosts.
- The development server uses an explicit public-file allowlist and binds to loopback. Plesk/Apache rules deny directory listings, private files and development directories. Deploy the public allowlist rather than the entire repository.

## Automated coverage

`npm test` runs browser and PostgreSQL-engine tests covering:

1. Public home and mobile layout; private panel hidden without login.
2. Demo creation, refresh, reset, exit, separate storage and zero database requests.
3. Stored HTML/script/event injection, navigation and saved theme/language controls.
4. Invalid setup keys and rejection of cached membership when verification fails.
5. Synthetic Word, Excel and PDF extraction; blocked file types.
6. Synthetic image OCR (requires internet to download the Tesseract worker/models).
7. Development-server file boundaries, traversal, rejected writes and headers.
8. Login/refresh/logout with a mocked Supabase API and the real vendored auth SDK.
9. Fresh and repeated SQL installation, role permissions, cross-school isolation, teacher class boundaries, forged payloads, approval and removal. PGlite provides PostgreSQL with local auth schema fixtures; no production database is contacted.
10. Public-source privacy and HTML sink checks.

`npm audit` checks npm dependencies. `npm run audit:vendor` checks vendored scripts against the current RetireJS database. A clean result means no matching known vulnerabilities were reported by those checks, not that all possible vulnerabilities are absent.

## Dependency changes

PDF.js was updated from 3.11.174 to 4.10.38. Its historical advisory is https://github.com/mozilla/pdf.js/security/advisories/GHSA-wgrm-67xf-hhpq . `isEvalSupported` remains disabled. SheetJS was updated to the official standalone 0.20.3 release: https://docs.sheetjs.com/docs/getting-started/installation/standalone/ . Supabase JS 2.118.0 and DOMPurify 3.4.17 are vendored locally; corresponding licenses are in `vendor/`.

## Scope and remaining limits

These are source, local browser, mock-auth and local PostgreSQL tests. They do not audit the live Plesk host, production Supabase configuration, backup permissions, email verification, rate limits, account recovery, or existing production records. This SQL is for a fresh project, not a migration of the old production database.

The app currently synchronizes JSON snapshots. Concurrent edits and offline merge conflicts are not equivalent to transactional per-record versioning. Treat it as a demo/reference implementation until that workflow and the deployed infrastructure have been tested for the intended school workload. Do not enter real sensitive records into the public demo. Browser tab restore may restore demo session data.

OCR loads its worker and language models from Tesseract's distribution services; image recognition itself runs in the browser. Hosting these resources locally is possible for offline deployments.

To report a vulnerability, avoid posting student data, credentials or exploit payloads containing real records in public issues. Share only a minimal synthetic reproduction.
