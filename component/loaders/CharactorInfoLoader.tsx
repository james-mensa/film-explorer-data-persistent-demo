import { Skeleton } from "./Skeleton";

export default function CharacterInfoSkeleton() {
  return (
    <section className="max-w-4xl mx-auto p-4 md:p-6">
      {/* Image Skeleton */}
      <div className="relative">
        <Skeleton className="h-48 md:h-64 w-full rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Skeleton className="h-8 w-3/4 mb-2" />
          <div className="flex items-center">
            <Skeleton className="h-3 w-3 rounded-full mr-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>

      {/* Details Skeleton */}
      <div className="mt-6 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <div className="space-y-3">
              <DetailRowSkeleton />
              <DetailRowSkeleton />
              <DetailRowSkeleton />
            </div>
          </div>
          <div className="my-4 flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-1/3 mb-4" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center">
                <Skeleton className="h-5 w-10 mr-2 rounded" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRowSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-32 sm:ml-2" />
    </div>
  );
}