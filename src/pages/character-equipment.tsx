import Link from "next/link";
import Layout from "../shared/components/Layout";

function CharacterEquipment() {
  return (
    <Layout>
      <h1>Character Equipment</h1>
      <Link href="/character-skill">Przejdź do umiejętności postaci</Link>
    </Layout>
  );
}

export default CharacterEquipment;
