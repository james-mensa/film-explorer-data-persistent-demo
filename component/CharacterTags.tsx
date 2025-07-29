import { Character } from "@/types/apis";

export function CharacterTags({ species, gender, status }: Pick<Character, 'species' | 'gender' | 'status'>) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Tag label={species} color="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" />
      <Tag label={gender} color="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100" />
      {status !== "unknown" && (
        <Tag 
          label={status} 
          color={`${statusColor[status as keyof typeof statusColor]} text-white`} 
        />
      )}
    </div>
  );
}

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className={`${color} text-xs font-medium px-2.5 py-0.5 rounded`}>
      {label}
    </span>
  );
}