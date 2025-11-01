import { ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function Image({
  src,
  alt,
  className = "",
  ...props
}: ImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          Image not found
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}
