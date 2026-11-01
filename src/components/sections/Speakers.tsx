import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PersonCard from "../cards/PersonCard";
import speakersData from "../../data/speakers.json";
import type { Speaker } from "../../types";

const speakers = speakersData as { speakers: Speaker[] };

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <SectionTitle
          label="SPEAKERS"
          title="Meet the Minds Behind the Mics"
          subtitle="Learn from experienced developers sharing their knowledge and insights"
        />

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.speakers.map((speaker) => (
            <div key={speaker.id}>
              <PersonCard person={speaker} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
