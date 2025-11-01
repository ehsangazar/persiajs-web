import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import aboutData from "../../data/about.json";
import type { AboutContent } from "../../types";

const about = aboutData as AboutContent;

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <Container>
        <SectionTitle label="ABOUT" title={about.title} />
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {about.paragraphs.map((paragraph, index) => (
              <div key={index} className="mb-6 last:mb-0">
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
