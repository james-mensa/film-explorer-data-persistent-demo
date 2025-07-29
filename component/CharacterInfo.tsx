"use client";

import { Character } from "@/types/apis";
import { CharacterImage } from "./CharacterImage";
import { CharacterHeader } from "./CharacterHeader";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterEpisodes } from "./CharacterEpisodes";
import { CharacterTags } from "./CharacterTags";
import CharacterInfoSkeleton from "./loaders/CharactorInfoLoader";

export default function CharacterInfoPage(data: Character) {
  const { image, name, status, species, gender, origin, location, episode } =
    data;
  const isEmptyData =  Object.keys(data).length === 0;
  if (isEmptyData) {
    return <CharacterInfoSkeleton />;
  }
  return (
    <section className="max-w-4xl mx-auto p-2 md:p-6">
      {/* Character Header with Image */}

      <div className="relative">
        <CharacterImage src={image} alt={name} />
        <CharacterHeader name={name} status={status} species={species} />
      </div>

      {/* Character Details */}

      <div className="mt-6 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800  shadow-sm">
        <div>
          <CharacterDetails
            gender={gender}
            origin={origin}
            location={location}
          />

          <div className="my-4 ">
            <CharacterTags species={species} gender={gender} status={status} />
          </div>
        </div>

        <CharacterEpisodes episodes={episode} />
      </div>
    </section>
  );
}
