import { useState, useEffect, useCallback } from "react";
import navigationData from "../../data/navigation.json";
import type { NavLink } from "../../types";

const navigation = navigationData as { links: NavLink[] };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          // Detect active section with improved logic
          const sections = navigation.links
            .map((link) => {
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
  }, [isMobileMenuOpen]);

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
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href);

    // Smooth scroll to section with proper header offset
    const element = document.querySelector(href);
    if (element) {
      // Header height: 64px (h-16) on mobile, 80px (h-20) on desktop
      const headerHeight = window.innerWidth >= 768 ? 80 : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight - 10; // Extra 10px padding

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  }, []);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 rounded-lg px-1 -ml-1"
              aria-label="PersiaJS Home"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="PersiaJS"
                  className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900 tracking-tight transition-colors duration-200 group-hover:text-[#f59e0b]">
                PersiaJS
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 ${
                      isActive
                        ? "text-[#f59e0b] bg-[#fef3c7]/50"
                        : "text-gray-700 hover:text-[#f59e0b] hover:bg-gray-50"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#f59e0b] rounded-full transition-all duration-200"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Mobile Menu Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-[#fef3c7]/30 to-white">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="PersiaJS"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-lg text-gray-900">Menu</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
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
              aria-label="Mobile navigation"
            >
              {navigation.links.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group flex items-center px-4 py-3.5 mb-1 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 min-h-[44px] ${
                      isActive
                        ? "text-[#f59e0b] bg-[#fef3c7]/50 shadow-sm"
                        : "text-gray-700 hover:text-[#f59e0b] hover:bg-gray-50"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="relative">
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#f59e0b] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
