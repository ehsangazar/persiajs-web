import { useState, useEffect, useCallback, useRef } from "react";
import type { MouseEvent } from "react";
import navigationData from "../../data/navigation.json";
import type { NavLink } from "../../types";
import socialData from "../../data/social.json";
import { EVENT_SLUG } from "../../data/events";

const navigation = navigationData as { links: NavLink[] };

// The English page is the only English page, so its nav does not pretend the
// home sections are English: every Persian destination says so.
const telegramUrl =
  socialData.links.find((l) => l.platform === "Telegram")?.url ?? "/";
const linksEn: NavLink[] = [
  { label: "About", href: "/en" },
  { label: "Articles (in Persian)", href: "/fa/articles" },
  { label: "Past events (in Persian)", href: "/#events" },
  { label: "Courses (in Persian)", href: "/#courses" },
  { label: "Telegram group", href: telegramUrl, external: true },
];

// Smooth scroll to a section, leaving room for the fixed header
function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (!element) return;

  // Header height: 64px (h-16) on mobile, 80px (h-20) on desktop
  const headerHeight = window.innerWidth >= 768 ? 80 : 64;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerHeight - 10;

  window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" });
}

// The site is Persian-first; the English page (/en) passes lang="en"
const strings = {
  fa: {
    home: "صفحه‌ی اصلی PersiaJS",
    nav: "منوی اصلی",
    menu: "منو",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",
    switchLabel: "English",
    switchHref: "/en",
    switchLang: "en",
  },
  en: {
    home: "PersiaJS Home",
    nav: "Main navigation",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "فارسی",
    switchHref: "/",
    switchLang: "fa",
  },
} as const;

export default function Header({
  currentPath = "/",
  lang = "fa",
}: {
  currentPath?: string;
  lang?: "fa" | "en";
}) {
  const t = strings[lang];
  const links = lang === "en" ? linksEn : navigation.links;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const homePath = `${base}/`;

const normalizePath = (path: string) =>
  path.replace(/\/+$/, "") || "/";

const isHomePage =
  normalizePath(currentPath) === "/" ||
  normalizePath(currentPath) === normalizePath(base);

const navHref = (href: string) => {
  if (href.startsWith("#")) {
    return isHomePage ? href : `${homePath}${href}`;
  }

  if (href.startsWith("/")) {
    return href === "/" ? homePath : `${base}${href}`;
  }

  return href;
};

  // A section to scroll to after the mobile menu has released its scroll lock
  const pendingScroll = useRef<string | null>(null);

  // Throttled scroll handler for better performance
  useEffect(() => {
    if (!isHomePage) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          // Detect active section with improved logic
          const sections = navigation.links
            .map((link) => {
              if (!link.href.startsWith("#")) return null;
              const element = document.querySelector(link.href);
              return element && element instanceof HTMLElement
                ? { element, href: link.href, offsetTop: element.offsetTop }
                : null;
            })
            .filter(Boolean) as Array<{
            element: HTMLElement;
            href: string;
            offsetTop: number;
          }>;

          // Header height: 64px (h-16) on mobile, 80px (h-20) on desktop
          const headerHeight = window.innerWidth >= 768 ? 80 : 64;
          const scrollPosition = scrollY + headerHeight + 20; // Offset for header height + padding

          // Find the section currently in view
          let currentActive = "";
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (scrollPosition >= section.offsetTop - 50) {
              currentActive = section.href;
              break;
            }
          }

          // Check if we're at the top of the page
          if (scrollY < headerHeight) {
            currentActive = "";
          }

          setActiveSection(currentActive);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle keyboard navigation (ESC key closes menu)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, isHomePage]);

  // Handle body scroll lock with improved cleanup
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }

      // The menu link that was tapped: scroll now that the page can scroll again
      if (pendingScroll.current) {
        const target = pendingScroll.current;
        pendingScroll.current = null;
        requestAnimationFrame(() => scrollToSection(target));
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

const handleLinkClick = useCallback(
  (href: string) => {
    setIsMobileMenuOpen(false);

    if (!href.startsWith("#")) {
      window.location.href = navHref(href);
      return;
    }

    setActiveSection(href);

    if (href === "#events" && !isHomePage) {
      window.location.href = `${base}/events/${EVENT_SLUG}`;
      return;
    }

    if (!isHomePage) {
      window.location.href = `${homePath}${href}`;
      return;
    }

    if (document.body.style.position === "fixed") {
      pendingScroll.current = href;
    } else {
      scrollToSection(href);
    }
  },
  [isHomePage]
);

  const handleLogoClick = useCallback(
    (e: MouseEvent) => {
      setIsMobileMenuOpen(false);
      setActiveSection("");
      // If we're not on home page, Link will handle navigation
      if (isHomePage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [isHomePage]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-line"
            : "bg-canvas/80 backdrop-blur-sm border-b border-transparent"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          aria-label={t.nav}
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href={homePath}
              className="flex items-center gap-2.5 group transition-all duration-300 ease-out hover:opacity-90 rounded-lg px-1 -ms-1"
              aria-label={t.home}
              onClick={handleLogoClick}
            >
              <div className="relative">
                <img
                  src={`${base}/logo.png`}
                  alt="PersiaJS"
                  className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <span className="font-bold text-lg md:text-xl text-ink tracking-tight transition-colors duration-300 ease-out group-hover:text-ink">
                PersiaJS
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const isActive = link.href.startsWith("#")
                  ? activeSection === link.href
                  : currentPath.includes(link.href);
                return (
                  <a
                    key={link.href}
                    href={navHref(link.href)}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ease-out rounded-lg group ${
                      isActive
                        ? "text-ink bg-canvas"
                        : "text-ink-soft hover:text-ink hover:bg-canvas"
                    }`}
                    onClick={(e) => {
                      if (link.external) return;
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-ink rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
              <a
                href={`${base}${t.switchHref}`}
                lang={t.switchLang}
                className="ms-2 px-3 py-2 text-sm font-bold rounded-xl bg-ink text-white hover:bg-ink-soft transition-colors duration-200"
              >
                {t.switchLabel}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-ink hover:bg-canvas active:bg-line rounded-xl transition-all duration-300 ease-out min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <svg
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90"
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

        {/* Mobile Menu Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-surface shadow-2xl rounded-l-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={t.menu}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-line">
              <div className="flex items-center gap-2.5">
                <img
                  src={`${base}/logo.png`}
                  alt="PersiaJS"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-lg text-ink">{t.menu}</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-muted hover:text-ink hover:bg-canvas active:bg-line rounded-xl transition-all duration-300 ease-out min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={t.closeMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              className="flex-1 overflow-y-auto py-4 px-3"
              aria-label={t.nav}
            >
              {links.map((link, index) => {
                const isActive = link.href.startsWith("#")
                  ? activeSection === link.href
                  : currentPath.includes(link.href);
                return (
                  <a
                    key={link.href}
                    href={navHref(link.href)}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={(e) => {
                      if (link.external) return;
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group flex items-center px-4 py-3.5 mb-1 text-base font-semibold rounded-xl transition-all duration-300 ease-out min-h-[44px] ${
                      isActive
                        ? "text-ink bg-canvas"
                        : "text-ink-soft hover:text-ink hover:bg-canvas"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="relative">
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute -end-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-ink rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </a>
                );
              })}
              <a
                href={`${base}${t.switchHref}`}
                lang={t.switchLang}
                className="flex items-center justify-center px-4 py-3.5 mt-3 text-base font-bold rounded-xl bg-ink text-white hover:bg-ink-soft transition-colors duration-200 min-h-[48px]"
              >
                {t.switchLabel}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}