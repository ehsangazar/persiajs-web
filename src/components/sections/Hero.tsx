import { useEffect, useState } from "react";
import Container from "../layout/Container";
import SocialIcon from "../ui/SocialIcon";
import Button from "../ui/Button";
import socialData from "../../data/social.json";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const social = socialData as { links: SocialLink[] };

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background Gradient - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white via-40% to-red-50" />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />

      {/* Geometric Pattern Overlay - Enhanced */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
              <circle cx="0" cy="0" r="2" fill="#F59E0B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Background Elements with Parallax */}
      <div
        className="absolute inset-0 opacity-10 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400 rounded-full opacity-30 animate-float-delayed" />
        <div
          className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-amber-400 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-500 rounded-full opacity-25 animate-float-delayed" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center py-20 md:py-32">
        {/* Badge with improved animation */}
        <div
          className={`inline-flex items-center justify-center gap-2 bg-white rounded-full px-5 py-2.5 mb-10 border border-gray-200 transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          onClick={() =>
            window.open(
              social.links.find((l) => l.platform === "Telegram")?.url,
              "_blank"
            )
          }
          role="button"
          tabIndex={0}
          aria-label="Join our growing community on Telegram"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
          <span className="text-sm font-semibold text-gray-900 hover:text-[#FF4500] transition-colors duration-300 whitespace-nowrap">
            Join Our Growing Community
          </span>
        </div>

        {/* Main Heading with staggered animation */}
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 sm:mb-8 leading-[0.9] transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block text-gray-900 font-heading">Persia JS</span>
        </h1>

        {/* Tagline with enhanced styling */}
        <p
          className={`text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed text-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Empowering the{" "}
          <span className="font-semibold text-[#FF4500]">Persian-speaking</span>{" "}
          Developer Community
        </p>

        {/* Stats - Quick info */}
        <div
          className={`flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-gray-900">
            <span className="text-[#FF4500] text-sm">●</span>
            <span className="text-sm md:text-base font-medium">
              500+ Members
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-900">
            <span className="text-[#FF4500] text-sm">●</span>
            <span className="text-sm md:text-base font-medium">
              Monthly Events
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-900">
            <span className="text-[#FF4500] text-sm">●</span>
            <span className="text-sm md:text-base font-medium">
              Expert Speakers
            </span>
          </div>
        </div>

        {/* Call to Action Buttons - Enhanced */}
        <div
          className={`relative flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            variant="primary"
            size="md"
            onClick={() => scrollToSection("#about")}
            className="w-full sm:w-auto"
            rightIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            }
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => scrollToSection("#speakers")}
            className="w-full sm:w-auto"
            leftIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          >
            Meet Our Speakers
          </Button>
        </div>

        {/* Social Links - Quick Access */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
            Connect with us:
          </span>
          <div className="flex gap-3">
            {social.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2"
                aria-label={`Visit our ${link.platform} page`}
              >
                <SocialIcon
                  platform={link.icon}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator - Sticky to bottom of hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center text-gray-600 hover:text-[#FF4500] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 rounded-md p-2"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium mb-1.5 whitespace-nowrap">
            Scroll to explore
          </span>
          <div className="relative">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </button>
      </div>

      {/* Decorative elements at edges */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-red-200/30 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}
