import { Skeleton } from '@/src/components/ui/skeleton';
import { Card } from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';

export function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      {/* Breadcrumb Skeleton */}
      <div className="mb-6 flex items-center gap-2 text-sm">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Skeleton */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-800">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Product Info Skeleton */}
        <div className="flex flex-col gap-6">
          {/* Category Badge */}
          <Skeleton className="h-6 w-24 rounded-full" />

          {/* Title */}
          <div className="space-y-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-3/4" />
          </div>

          {/* Price */}
          <Skeleton className="h-12 w-32" />

          <Separator className="bg-gray-800" />

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <Separator className="bg-gray-800" />

          {/* Stock */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-40" />
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 w-full sm:w-12" />
          </div>
        </div>
      </div>

      {/* Related Products Skeleton */}
      <div className="mt-16">
        <Skeleton className="mb-8 h-8 w-48" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden border-gray-800 bg-gray-900/50">
              <Skeleton className="aspect-square w-full" />
              <div className="space-y-2 p-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-9 w-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
