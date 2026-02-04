import { Skeleton } from '@/src/components/ui/skeleton';
import { Card } from '@/src/components/ui/card';

export function ProductCardSkeleton() {
  return (
    <Card className="group overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-gray-700">
      <div className="flex flex-col">
        {/* Image Skeleton */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-800">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
          {/* Category Badge Skeleton */}
          <Skeleton className="h-5 w-20 rounded-full" />

          {/* Title Skeleton */}
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />

          {/* Spacer */}
          <div className="flex-1" />

          {/* Price Skeleton */}
          <Skeleton className="h-7 w-24" />

          {/* Button Skeleton */}
          <Skeleton className="h-9 w-full sm:h-10" />
        </div>
      </div>
    </Card>
  );
}
