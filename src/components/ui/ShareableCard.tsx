interface ShareableCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
}

export default function ShareableCard({
  title,
  date,
  time,
  location,
}: ShareableCardProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 rounded-2xl p-8 md:p-12 border-2 border-orange-200 shadow-2xl">
      {/* Square aspect ratio container for social media */}
      <div className="aspect-square max-w-2xl mx-auto flex flex-col justify-center items-center text-center space-y-6">
        {/* Logo/Brand */}
        <div className="mb-4">
          <div className="text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">
            PersiaJS
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium">
            Persian JavaScript Community
          </div>
        </div>

        {/* Event Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight px-4">
          {title}
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent my-4"></div>

        {/* Event Details */}
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-[#FF4500] flex-shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">{date}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-[#FF4500] flex-shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">{time}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-[#FF4500] flex-shrink-0"
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
            <span className="text-lg md:text-xl font-semibold">{location}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-orange-200">
          <div className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
            <span>RSVP Now</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 text-xs md:text-sm text-gray-500">
          persiajs.dev
        </div>
      </div>
    </div>
  );
}
