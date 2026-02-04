import { ProductCardSkeleton } from '@/src/components/products/ProductCardSkeleton';
import { Skeleton } from '@/src/components/ui/skeleton';

export default function ProductsLoading() {
  return (
    <div className="w-full">
      {/* Hero Section Skeleton */}
      <div className="w-full border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-6 space-y-2 md:mb-8">
            <Skeleton className="h-12 w-80 sm:h-14 md:h-16" />
            <Skeleton className="h-6 w-96 sm:h-7" />
          </div>

          {/* Search and Filters Skeleton */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-24 sm:w-32" />
            </div>

            {/* Category Filters */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-40" />
              <div className="flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10">
        {/* Counter Skeleton */}
        <div className="mb-6 flex items-center justify-between">
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(10)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
