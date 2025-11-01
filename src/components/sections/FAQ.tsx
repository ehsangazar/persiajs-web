import { useState, useRef, useEffect } from "react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import faqData from "../../data/faq.json";
import type { FAQItem } from "../../types";

const faq = faqData as { items: FAQItem[] };

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
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

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <Container>
        <SectionTitle
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about PersiaJS"
          className="animate-on-scroll opacity-0"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll opacity-0 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-lg"
            >
              <button
                className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 group"
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                {/* Question Number Badge */}
                <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                      openItem === item.id
                        ? "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-900 pr-4 text-base md:text-lg group-hover:text-orange-600 transition-colors">
                    {item.question}
                  </span>
                </div>

                {/* Chevron Icon */}
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 md:py-6 bg-gradient-to-br from-orange-50/50 to-transparent border-t border-orange-100">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
