import { useRef, useEffect } from "react";
import Container from "../layout/Container";
import SocialIcon from "../ui/SocialIcon";
import socialData from "../../data/social.json";
import type { SocialLink } from "../../types";

const social = socialData as { links: SocialLink[] };

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("fade-in-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50"
    >
      <Container className="relative z-10">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Connect With Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow developers, share ideas, and grow together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {social.links.map((link, index) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-on-scroll opacity-0"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <SocialIcon
                      platform={link.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {link.platform}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Follow us for updates
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
