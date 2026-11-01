// The site can live at the domain root (https://persiajs.dev/) or under a
// sub-path (https://user.github.io/Repo/). These helpers add the base path.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** "/articles" becomes "/Repo/articles" (or stays "/articles" at the root). */
export function withBase(path: string): string {
  // Leave hash links, external links and mailto: alone
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${base}${path}`;
}
