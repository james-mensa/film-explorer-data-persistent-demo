'use client';

import { Skeleton } from "./Skeleton";



export const CharacterCardSkeleton = () => {
  return (
    <div className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">

      <Skeleton className="relative h-64 w-full" />

      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </div>

      <div className="absolute right-4 top-4">
        <Skeleton className="h-5 w-10 rounded-full" />
      </div>
    </div>
  );
};

