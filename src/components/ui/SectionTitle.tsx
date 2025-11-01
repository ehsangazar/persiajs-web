interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {label && (
        <div className="inline-block mb-4">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full shadow-sm">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {title.split(" ").map((word, index) => {
          // Highlight certain keywords
          const highlightWords = [
            "JS",
            "JavaScript",
            "PersiaJS",
            "Team",
            "Community",
          ];
          if (highlightWords.some((hw) => word.includes(hw))) {
            return (
              <span
                key={index}
                className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                {word}{" "}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
