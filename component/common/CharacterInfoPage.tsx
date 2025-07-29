'use client';

import { useCharacterStore } from "@/store/characters";
import { useEffect } from "react";
import Link from "next/link";
import { useNetworkCheck } from "@/hooks/useNetworkCheck";
import CharacterInfo from "@/component/CharacterInfo";
import CharacterInfoSkeleton from "../loaders/CharactorInfoLoader";


export default function CharacterInfoPage({ id }: {id:number}) {
  const { characterDetails, fetchCharacterDetail } = useCharacterStore();
  const {isOnline} = useNetworkCheck();

  const character = characterDetails.data[id];

  useEffect(() => {

    if ((!character) && isOnline) {

      fetchCharacterDetail(id)
    }
  }, [id, isOnline, character, fetchCharacterDetail]);

  if (characterDetails.isFetchingNewCharacter) {
    return ( <CharacterInfoSkeleton />
    );
  }



  return (
    <main className="min-h-screen pt-8 px-2">
      <Link
        href="/"
        className="flex flex-row mb-4 items-center  text-blue-500 hover:text-blue-700"
      >
      <div className="mb-2"> ← </div> Back to Characters
      </Link>
      <CharacterInfo {...character} />
    </main>
  );
}