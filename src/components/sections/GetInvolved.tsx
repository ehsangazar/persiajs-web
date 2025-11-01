import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import ActionCardComponent from "../cards/ActionCard";
import socialData from "../../data/social.json";
import type { ActionCard } from "../../types";

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

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-32 bg-white">
      <Container>
        <SectionTitle
          label="GET INVOLVED"
          title="Join the PersiaJS Community"
          subtitle="Help us grow and make a difference in the Persian-speaking developer community"
        />

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {actionCards.map((card) => (
            <div key={card.id} className="h-full">
              <ActionCardComponent card={card} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
