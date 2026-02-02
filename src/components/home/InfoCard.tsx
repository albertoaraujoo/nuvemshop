import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/30 p-8 text-center backdrop-blur transition-all hover:border-gray-700 hover:bg-gray-900/50">
      <div className="rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
