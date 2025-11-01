import type { ActionCard } from "../../types";
import Button from "../ui/Button";

interface ActionCardProps {
  card: ActionCard;
  className?: string;
}

const iconMap: Record<string, string> = {
  microphone:
    "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  location:
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  lightning: "M13 10V3L4 14h7v7l9-11h-7z",
  paperPlane: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
};

export default function ActionCardComponent({
  card,
  className = "",
}: ActionCardProps) {
  const iconPath = iconMap[card.icon] || iconMap.paperPlane;

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 transition-all duration-300 ease-out hover:border-orange-200 hover:shadow-xl h-full flex flex-col ${className}`}
    >
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-16 h-16 bg-[#FF4500] rounded-lg flex items-center justify-center mb-4 shadow-md">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d={iconPath} />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
        <p className="text-gray-700 mb-5 text-base leading-relaxed flex-1">
          {card.description}
        </p>

        <Button
          variant="primary"
          onClick={() => window.open(card.buttonLink, "_blank")}
          size="sm"
        >
          {card.buttonText}
        </Button>
      </div>
    </div>
  );
}
