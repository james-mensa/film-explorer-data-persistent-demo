import { Character } from "@/types/apis";

export function CharacterDetails({ gender, origin, location }: Pick<Character, 'gender' | 'origin' | 'location'>) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
        Character Details
      </h2>
      <div className="space-y-3">
        <DetailRow label="Gender" value={gender} />
        <DetailRow label="Origin" value={origin.name} />
        <DetailRow label="Location" value={location.name} />
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
      <span className="w-24 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        {label}:
      </span>
      <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">
        {value}
      </span>
    </div>
  );
}