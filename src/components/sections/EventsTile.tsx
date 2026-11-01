import { Link } from "react-router-dom";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import { EVENT_SLUG } from "../../data/events";

export default function EventsTile() {
  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <Container>
        <SectionTitle
          label="EVENTS"
          title="Upcoming Event"
          subtitle="Join us for our monthly community meetups"
        />

        {/* Event Tile */}
        <div className="max-w-4xl mx-auto">
          <Link to={`/events/${EVENT_SLUG}`} className="block group">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 p-8 md:p-12 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block mb-4">
                    <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full shadow-sm">
                      December 2025
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#FF4500] transition-colors duration-300">
                    PersiaJS December 2025: Design Systems & Web Components
                  </h2>
                  <div className="space-y-3 text-gray-700 mb-6">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#FF4500] mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">December 1st, 2025</span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#FF4500] mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">6:00 PM - 8:30 PM GMT</span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#FF4500] mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Online</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Join us for an exciting evening of technical talks and insights! 
                    From design systems and web components to engineering productivity 
                    and peak performance strategies.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[#FF4500] font-semibold text-lg group-hover:text-[#FF5414] transition-colors duration-300 flex items-center">
                    View Event Details
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
