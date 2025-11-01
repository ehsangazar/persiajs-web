import socialData from "../../data/social.json";
import navigationData from "../../data/navigation.json";
import SocialIcon from "../ui/SocialIcon";
import type { SocialLink, NavLink } from "../../types";

const social = socialData as { links: SocialLink[] };
const navigation = navigationData as { links: NavLink[] };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="PersiaJS Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white font-heading">
                  PersiaJS
                </span>
                <span className="text-sm text-gray-400">
                  Developer Community
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Empowering the Persian-speaking Developer Community through
              knowledge sharing, collaboration, and innovation in the world of
              JavaScript and beyond.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {social.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={link.platform}
                >
                  <SocialIcon
                    platform={link.icon}
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              About
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {navigation.links
                .filter(
                  (link) =>
                    link.label === "The Team" || link.label === "Speakers"
                )
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p>© {currentYear} PersiaJS. All rights reserved.</p>
              <p className="mt-1">
                Designed & Developed with{" "}
                <span className="text-orange-500">❤️</span> by Ruhollah Hosseini
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <svg
                className="w-4 h-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>& JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
