// Resolves a bilingual project-data field ({ en, no }) to a plain string for
// the current language, falling back to English, then Norwegian, then the
// value itself (so plain strings -- e.g. technologies, which don't need
// translating -- pass through unchanged).
export function tr(field, language) {
  if (field && typeof field === "object") {
    return field[language] || field.en || field.no || "";
  }
  return field;
}
