import { ProductCardSkeleton } from '@/src/components/products/ProductCardSkeleton';
import { InfoCardSkeleton } from '@/src/components/home/InfoCardSkeleton';
import { Skeleton } from '@/src/components/ui/skeleton';

export default function HomeLoading() {
    return (
        <div className="flex w-full flex-col gap-10">
            {/* Hero Section Skeleton */}
            <section className="w-full">
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <div className="mb-8 space-y-4 md:mb-10">
                        <Skeleton className="h-12 w-80 sm:h-14 md:h-16" />
                        <Skeleton className="h-6 w-96 sm:h-7 md:h-8" />
                    </div>

                    {/* Products Grid Skeleton */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                        {[...Array(10)].map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Cards Section Skeleton */}
            <section className="w-full bg-gray-900/30">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
                    <div className="mb-8 text-center md:mb-12">
                        <Skeleton className="mx-auto h-10 w-80 sm:h-12 md:h-14" />
                        <Skeleton className="mx-auto mt-3 h-5 w-64 sm:h-6" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <InfoCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
