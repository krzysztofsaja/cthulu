import Link from 'next/link';
import Layout from "../shared/components/Layout";

function CharacterProfile() {
  return (
    <Layout>
      <h1>Character</h1>
      <Link href="/character-equipment">Przejdź do ekwipunku postaci</Link>
    </Layout>
  );
}

export default CharacterProfile;
