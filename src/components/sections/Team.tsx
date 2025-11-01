import { useRef, useEffect } from "react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PersonCard from "../cards/PersonCard";
import ActionCardComponent from "../cards/ActionCard";
import teamData from "../../data/team.json";
import type { TeamMember, ActionCard } from "../../types";

const team = teamData as { members: TeamMember[] };

const joinTeamCard: ActionCard = {
  id: "join-team",
  icon: "paperPlane",
  title: "Join Our Team",
  description: "Want to join the core team?",
  buttonText: "Apply to join",
  buttonLink: "#contact",
};

export default function Team() {
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

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <Container>
        <SectionTitle
          label="OUR TEAM"
          title="Meet The Team"
          subtitle="The passionate people behind PersiaJS"
          className="animate-on-scroll opacity-0"
        />
        
        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.members.map((member) => (
            <div key={member.id} className="animate-on-scroll opacity-0">
              <PersonCard person={member} />
            </div>
          ))}
        </div>

        {/* Join Team Card */}
        <div className="max-w-md mx-auto animate-on-scroll opacity-0">
          <ActionCardComponent card={joinTeamCard} />
        </div>
      </Container>
    </section>
  );
}
