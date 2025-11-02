import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ShareButtons from "../components/ui/ShareButtons";
import socialData from "../data/social.json";
import eventDataJson from "../data/events/001.json";

const social = socialData as {
  speakerApplicationForm: string;
  sponsorForm: string;
};

// Type definition for event data
type EventData = typeof eventDataJson;
const eventData = eventDataJson as EventData;

export default function EventsPage() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Validate slug - redirect if slug doesn't match
  const expectedSlug = eventData.slug;
  if (slug !== expectedSlug) {
    return <Navigate to={`/events/${expectedSlug}`} replace />;
  }

  // Get current page URL for sharing
  const shareUrl = `${window.location.origin}/events/${eventData.slug}`;
  const shareTitle = eventData.title;
  const shareDescription = eventData.description;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <SectionTitle
            label="EVENTS"
            title="Upcoming Event"
            subtitle="Join us for our monthly community meetups"
          />

          {/* Event Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 p-8 md:p-12 mb-12 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {eventData.title}
                  </h2>
                  <div className="space-y-3 text-gray-700">
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
                      <span className="font-medium">{eventData.date}</span>
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
                      <span className="font-medium">{eventData.time}</span>
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
                      <span className="font-medium">{eventData.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open(eventData.lumaLink, "_blank")}
                    className="w-full mb-4"
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
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    RSVP on Luma
                  </Button>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Registration deadline: November 30th, 2025
                  </p>
                  <ShareButtons
                    url={shareUrl}
                    title={shareTitle}
                    description={shareDescription}
                  />
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {eventData.description}
              </p>

              <div className="bg-white rounded-xl p-6 border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-4">
                  What to expect:
                </h3>
                <ul className="space-y-2">
                  {eventData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#FF4500] mr-3 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agenda */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Agenda
              </h3>
              <div className="space-y-4">
                {eventData.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF4500] px-4 py-2 rounded-lg font-semibold">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h4>
                        {item.type === "talk" && item.speaker && (
                          <p className="text-[#FF4500] font-semibold mb-3">
                            Speaker: {item.speaker}
                          </p>
                        )}
                        {item.abstract && (
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {item.abstract}
                          </p>
                        )}
                        {item.items && (
                          <ul className="space-y-2">
                            {item.items.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="flex items-start text-gray-700"
                              >
                                <span className="text-[#FF4500] mr-3 mt-1">
                                  •
                                </span>
                                <span>{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {("isOpen" in item && (item as { isOpen?: boolean }).isOpen) && (
                          <div className="mt-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(
                                  social.speakerApplicationForm,
                                  "_blank"
                                )
                              }
                            >
                              Apply to Speak →
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Speakers
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {eventData.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {speaker.name}
                    </h4>
                    <p className="text-[#FF4500] font-semibold mb-3">
                      {speaker.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {speaker.bio}
                    </p>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">
                        Topic:
                      </span>{" "}
                      <span className="text-gray-900 font-semibold">
                        {speaker.topic}
                      </span>
                    </div>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#FF4500] hover:text-[#FF5414] font-semibold transition-colors duration-300"
                    >
                      LinkedIn Profile
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Event Details
              </h3>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Language:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.language}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Level:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.level}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Cost:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.cost}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Format:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.format}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Capacity:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.capacity}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600">
                      Recording:
                    </span>{" "}
                    <span className="text-gray-900">
                      {eventData.eventDetails.recording}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Topics Covered
              </h3>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <ul className="grid md:grid-cols-2 gap-3">
                  {eventData.topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#FF4500] mr-3 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Additional Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FF4500] mr-3 mt-1">•</span>
                  <span>
                    <strong>Event Recording:</strong> The event will be recorded
                    and published on our{" "}
                    <a
                      href="https://www.youtube.com/@persiajs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF4500] hover:text-[#FF5414] font-semibold underline"
                    >
                      YouTube channel
                    </a>{" "}
                    within 48 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4500] mr-3 mt-1">•</span>
                  <span>
                    <strong>Slides:</strong> Speaker slides will be shared after
                    the event via our Telegram group
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4500] mr-3 mt-1">•</span>
                  <span>
                    <strong>Networking:</strong> Join our{" "}
                    <a
                      href="https://t.me/joinchat/BcZHTxkf2MoIC1pHxJ_xSw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF4500] hover:text-[#FF5414] font-semibold underline"
                    >
                      Telegram group
                    </a>{" "}
                    for pre and post-event discussions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4500] mr-3 mt-1">•</span>
                  <span>
                    <strong>Future Events:</strong> Stay tuned for our next
                    event announcements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
