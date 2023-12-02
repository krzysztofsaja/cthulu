import Link from 'next/link';
import { useEffect } from 'react';
import Layout from "../shared/components/Layout";
import CharacterForm from "../shared/components/character-form";
import { fetchCharacters, ICharacter } from '../api-services/character.api-service';

function CharacterProfile() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters: ICharacter[] = await fetchCharacters();
        console.log('Fetched characters:', characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []); // Użyj pustej tablicy zależności, aby useEffect wykonało się tylko raz po zamontowaniu komponentu
  
  return (
    <Layout>
      <h1>Character</h1>
      <Link href="/character-equipment">Przejdź do ekwipunku postaci</Link>
      <CharacterForm></CharacterForm>
    </Layout>
  );
}

export default CharacterProfile;
