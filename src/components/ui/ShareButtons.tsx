import { useState } from "react";
import SocialIcon from "./SocialIcon";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButtons({
  url,
  title,
  description: _description = "",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareButtons = [
    {
      platform: "x",
      label: "X (Twitter)",
      color: "hover:bg-[#1DA1F2] hover:text-white",
      iconColor: "text-[#1DA1F2] group-hover:text-white",
    },
    {
      platform: "facebook",
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:text-white",
      iconColor: "text-[#1877F2] group-hover:text-white",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2] hover:text-white",
      iconColor: "text-[#0A66C2] group-hover:text-white",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      color: "hover:bg-[#25D366] hover:text-white",
      iconColor: "text-[#25D366] group-hover:text-white",
    },
    {
      platform: "telegram",
      label: "Telegram",
      color: "hover:bg-[#0088CC] hover:text-white",
      iconColor: "text-[#0088CC] group-hover:text-white",
    },
  ];

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
        Share this event:
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {shareButtons.map((button) => (
          <a
            key={button.platform}
            href={shareLinks[button.platform as keyof typeof shareLinks]}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-white border-2 border-gray-200 transition-all duration-300 ${button.color} shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2`}
            aria-label={`Share on ${button.label}`}
          >
            <SocialIcon
              platform={button.platform}
              className={`w-5 h-5 ${button.iconColor} transition-colors duration-300`}
            />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-white border-2 border-gray-200 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 ${
            copied ? "bg-green-50 border-green-300" : ""
          }`}
          aria-label="Copy link"
        >
          {copied ? (
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      {copied && (
        <p className="text-xs text-green-600 text-center mt-2 font-medium">
          Link copied!
        </p>
      )}
    </div>
  );
}
