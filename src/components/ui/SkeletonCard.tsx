export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-200 rounded-xl mb-4"></div>

      {/* Title Skeleton */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>

      {/* Subtitle Skeleton */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

      {/* Button Skeleton */}
      <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
    </div>
  );
}
