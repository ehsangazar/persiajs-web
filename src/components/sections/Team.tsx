import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PersonCard from "../cards/PersonCard";
import ActionCardComponent from "../cards/ActionCard";
import teamData from "../../data/team.json";
import socialData from "../../data/social.json";
import type { TeamMember, ActionCard } from "../../types";

const team = teamData as { members: TeamMember[] };
const social = socialData as {
  links: Array<{ platform: string; url: string }>;
};

const telegramLink =
  social.links.find((link) => link.platform === "Telegram")?.url || "#contact";

const joinTeamCard: ActionCard = {
  id: "join-team",
  icon: "paperPlane",
  title: "Join Our Team",
  description: "Want to join the core team?",
  buttonText: "Apply to join",
  buttonLink: telegramLink,
};

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <Container>
        <SectionTitle
          label="OUR TEAM"
          title="Meet The Team"
          subtitle="The passionate people behind PersiaJS"
        />

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {team.members.map((member) => (
            <div key={member.id}>
              <PersonCard person={member} />
            </div>
          ))}
        </div>

        {/* Join Team Card */}
        <div className="max-w-md mx-auto">
          <ActionCardComponent card={joinTeamCard} />
        </div>
      </Container>
    </section>
  );
}
