import { Skeleton } from '@/src/components/ui/skeleton';
import { Card } from '@/src/components/ui/card';

export function InfoCardSkeleton() {
  return (
    <Card className="border-gray-800 bg-gray-900/50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
        <Skeleton className="h-6 w-6" />
      </div>
      <Skeleton className="mx-auto mb-2 h-6 w-32" />
      <Skeleton className="mx-auto h-4 w-full" />
      <Skeleton className="mx-auto mt-1 h-4 w-3/4" />
    </Card>
  );
}
