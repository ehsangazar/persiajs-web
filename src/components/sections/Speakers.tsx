import { useRef, useEffect } from "react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PersonCard from "../cards/PersonCard";
import ActionCardComponent from "../cards/ActionCard";
import speakersData from "../../data/speakers.json";
import socialData from "../../data/social.json";
import type { Speaker, ActionCard } from "../../types";

const speakers = speakersData as { speakers: Speaker[] };
const social = socialData as {
  speakerApplicationForm: string;
  sponsorForm: string;
};

const actionCards: ActionCard[] = [
  {
    id: "become-speaker",
    icon: "microphone",
    title: "Become a Speaker",
    description: "Share your knowledge",
    buttonText: "Apply to speak",
    buttonLink: social.speakerApplicationForm,
  },
  {
    id: "host-event",
    icon: "location",
    title: "Host a Persia JS in Your City",
    description: "Bring Persia JS to your local ecosystem",
    buttonText: "Host an event",
    buttonLink: "#contact",
  },
  {
    id: "become-sponsor",
    icon: "lightning",
    title: "Become a Sponsor",
    description:
      "Support the community and reach a highly engaged audience of developers",
    buttonText: "Sponsor PersiaJS",
    buttonLink: social.sponsorForm,
  },
];

export default function Speakers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".animate-on-scroll");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("fade-in-up");
              }, index * 100); // Stagger by 100ms
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
      id="speakers"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50"
    >
      <Container>
        <SectionTitle
          label="SPEAKERS"
          title="Meet the Minds Behind the Mics"
          subtitle="Learn from experienced developers sharing their knowledge and insights"
          className="animate-on-scroll opacity-0"
        />
        
        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {speakers.speakers.map((speaker) => (
            <div key={speaker.id} className="animate-on-scroll opacity-0">
              <PersonCard person={speaker} />
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actionCards.map((card) => (
            <div key={card.id} className="animate-on-scroll opacity-0">
              <ActionCardComponent card={card} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
