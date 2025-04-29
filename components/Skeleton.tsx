"use client";

export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-8 text-center">
      {/* Logo Skeleton */}
      <div className="w-48 h-12 bg-gray-800/50 rounded-lg mx-auto"></div>

      {/* Title Skeleton */}
      <div className="w-3/4 h-16 bg-gray-800/50 rounded-lg mx-auto"></div>
      <div className="w-1/2 h-8 bg-gray-800/50 rounded-lg mx-auto"></div>

      {/* Buttons Skeleton */}
      <div className="flex gap-6 justify-center">
        <div className="w-32 h-12 bg-gray-800/50 rounded-full"></div>
        <div className="w-32 h-12 bg-gray-800/50 rounded-full"></div>
      </div>
    </div>
  );
}
