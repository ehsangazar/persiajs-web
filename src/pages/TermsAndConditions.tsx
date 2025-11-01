import { useEffect } from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function TermsAndConditions() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <SectionTitle
            label="LEGAL"
            title="Terms & Conditions"
            subtitle="Understand the guidelines for participating in the PersiaJS community"
          />

          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 mb-8 border border-orange-100">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-0">
                Welcome to PersiaJS. By accessing or participating in our
                website, events, workshops, community channels, or educational
                resources, you agree to the following terms:
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">1.</span>
                  Community Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Respect others. Harassment, discrimination, or abusive
                      behavior will not be tolerated.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Conversations and discussions should remain professional,
                      constructive, and inclusive.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Sharing false or misleading information is prohibited.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Contributions to open-source projects and collaborative
                      efforts should follow community standards and best
                      practices.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">2.</span>
                  Event Participation
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Registration may be required to attend events, workshops,
                      or online sessions. We reserve the right to approve or
                      decline participation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      By attending, you consent to photography, audio, or video
                      recording that may be used for educational content and
                      community promotion.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      All events, workshops, and educational activities are
                      community-driven and educational in nature. PersiaJS does
                      not provide investment, financial, or legal advice.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">3.</span>
                  Content & Intellectual Property
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Educational materials, articles, tutorials, and code
                      shared by speakers, instructors, or community members
                      remain their intellectual property unless otherwise
                      stated.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Content produced by PersiaJS (including photos, videos,
                      educational materials, and event summaries) may be used
                      for community promotion and educational purposes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Open-source contributions are subject to their respective
                      licenses as specified by each project.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">4.</span>
                  Educational Resources & Learning Materials
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      While we strive to provide accurate and up-to-date
                      information, educational content is provided "as is"
                      without warranties.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Code examples, tutorials, and projects shared on the
                      platform are for educational purposes. Users are
                      responsible for understanding and adapting any code for
                      their own projects.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">5.</span>
                  Liability
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      Participation in events, workshops, and use of educational
                      resources is voluntary. PersiaJS is not liable for any
                      personal, financial, or technical damages that may arise
                      from participation or use of materials.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      External links, sponsors, third-party services, or tools
                      referenced in educational content are not under our
                      control, and we do not guarantee or endorse them.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">6.</span>
                  Changes to Terms
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#FF4500] mr-3 mt-1">•</span>
                    <span>
                      These Terms & Conditions may be updated from time to time.
                      Continued participation implies acceptance of any changes.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-[#FF4500] mr-3">7.</span>
                  Contact
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For any questions or concerns, please contact us through our{" "}
                  <a
                    href="/#community"
                    className="text-[#FF4500] hover:text-[#FF5414] font-semibold transition-colors duration-300 underline"
                  >
                    community channels
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
