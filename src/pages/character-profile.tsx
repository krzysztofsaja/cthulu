import Link from 'next/link';
import Layout from "../shared/components/Layout";
import CharacterForm from "../shared/components/character-form";


function CharacterProfile() {
  return (
    <Layout>
      <h1>Character</h1>
      <Link href="/character-equipment">Przejdź do ekwipunku postaci</Link>
      <CharacterForm></CharacterForm>
    </Layout>
  );
}

export default CharacterProfile;
