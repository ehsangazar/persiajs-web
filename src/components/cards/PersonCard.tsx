import type { Person } from "../../types";
import Image from "../ui/Image";

interface PersonCardProps {
  person: Person;
  className?: string;
}

export default function PersonCard({
  person,
  className = "",
}: PersonCardProps) {
  return (
    <div className={`group ${className}`}>
      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:border-orange-200">
        {/* Hover Gradient Overlay on Card */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* Image Container */}
        <div className="relative overflow-hidden">
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <Image
            src={person.image}
            alt={person.name}
            className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />

          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 translate-x-10 -translate-y-10" />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8 text-center z-20">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
            {person.name}
          </h3>
          <p className="text-gray-700 mb-4 text-sm">{person.title}</p>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-10 h-10 bg-orange-100 rounded-xl items-center justify-center hover:bg-orange-600 transition-all duration-300 group/link shadow-md hover:shadow-lg hover:scale-110"
              aria-label={`${person.name}'s LinkedIn`}
            >
              <svg
                className="w-5 h-5 text-orange-600 group-hover/link:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
