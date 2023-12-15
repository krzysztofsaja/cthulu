"use client";

import {
  ICharacter,
  fetchCharacters,
} from "@/src/api-services/character.api-service";
import { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState<ICharacter[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters: ICharacter[] = await fetchCharacters();
        setCharacters(characters);
        console.log("Fetched characters:", characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </div>
  );
}

export default CharacterList;
