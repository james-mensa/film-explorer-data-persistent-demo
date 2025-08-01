"use client";

import React, { useEffect } from "react";

import { useCharacterStore } from "@/store/characters";
import { CharacterCard } from "@/component/CharacterCard";
import { CharacterCardSkeleton } from "@/component/loaders/CharacterCardLoader";

const Home = () => {
  const {
    characters: { isLoading, data, errorMsg },
    fetchCharacters
  } = useCharacterStore();

  useEffect(() => {
    if (data.length === 0) {
      fetchCharacters();
    }
  }, [fetchCharacters, data.length]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Character List</h1>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <CharacterCardSkeleton key={`skeleton-${i}`} />
            ))
          : data.map((character, index) => (
              <CharacterCard key={index} {...character} />
            ))}
      </div>
    </main>
  );
};

export default Home;
