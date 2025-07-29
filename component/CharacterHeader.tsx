import { Character } from "@/types/apis";

export function CharacterHeader({ name, status, species }: Pick<Character, 'name' | 'status' | 'species'>) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        {name}
      </h1>
      <div className="flex items-center mt-1 sm:mt-2">
        <span
          className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
            statusColor[status as keyof typeof statusColor] || "bg-gray-500"
          } mr-2`}
        ></span>
        <span className="text-white text-xs sm:text-sm md:text-base">
          {status} - {species}
        </span>
      </div>
    </div>
  );
}