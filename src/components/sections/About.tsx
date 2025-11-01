import { useEffect, useRef } from "react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import aboutData from "../../data/about.json";
import type { AboutContent } from "../../types";

const about = aboutData as AboutContent;

export default function About() {
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
              }, index * 150); // Stagger animation by 150ms
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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <Container>
        <SectionTitle
          label="ABOUT"
          title={about.title}
          className="animate-on-scroll opacity-0"
        />
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {about.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 mb-6 last:mb-0"
              >
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
