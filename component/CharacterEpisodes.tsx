import { Character } from "@/types/apis";

export function CharacterEpisodes({ episodes }: { episodes: Character['episode'] }) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
        Episode Appearances
      </h2>
      <div className="max-h-48 sm:max-h-60 overflow-y-auto pr-2">
        <ul className="space-y-2">
          {episodes.slice(0, 5).map((ep, index) => (
            <EpisodeItem key={index} episodeUrl={ep} index={index} />
          ))}
          {episodes.length > 5 && (
            <li className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              + {episodes.length - 5} more episodes...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function EpisodeItem({ episodeUrl, index }: { episodeUrl: string; index: number }) {
  const episodeNumber = episodeUrl.split("/").pop();
  
  return (
    <li className="flex items-center">
      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-0.5 rounded mr-2">
        Ep {episodeNumber}
      </span>
      <span className="text-gray-700 dark:text-gray-300 text-sm">
        Episode {index + 1}
      </span>
    </li>
  );
}