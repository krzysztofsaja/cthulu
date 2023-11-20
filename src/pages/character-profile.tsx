import Link from 'next/link';
import Layout from "../shared/components/Layout";
import CharacterForm from "./character-form";

function CharacterProfile() {
  return (
    <Layout>
      <h1>Character</h1>
      <Link href="/character-equipment">Przejdź do ekwipunku postaci</Link>
      <FormData></FormData>
    </Layout>
  );
}

export default CharacterProfile;
