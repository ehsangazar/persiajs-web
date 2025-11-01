import { useState, useEffect } from "react";
import navigationData from "../../data/navigation.json";
import type { NavLink } from "../../types";

const navigation = navigationData as { links: NavLink[] };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navigation.links.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section instanceof HTMLElement) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(navigation.links[i].href);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled
            ? "bg-white border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 text-[#1A1A1B] hover:opacity-80 transition-opacity"
              aria-label="PersiaJS Home"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }}
            >
              <img
                src="/logo.png"
                alt="PersiaJS"
                className="h-8 w-8 object-contain"
                loading="eager"
              />
              <span className="font-semibold text-lg text-[#1A1A1B]">
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
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? "text-[#FF4500] bg-[#EDEFF1]"
                        : "text-[#1A1A1B] hover:text-[#FF4500] hover:bg-[#F7F9FA]"
                    }`}
                    onClick={() => setActiveSection(link.href)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1A1A1B] hover:bg-[#F7F9FA] rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-900"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto p-2">
              {navigation.links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-[#FF4500] bg-[#EDEFF1]"
                        : "text-[#1A1A1B] hover:text-[#FF4500] hover:bg-[#F7F9FA]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
