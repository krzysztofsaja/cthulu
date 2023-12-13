import Layout from "@/src/shared/components/Layout";
import Link from "next/link";

function CharacterEquipment() {
  return (
    <Layout>
      <h1>Character Equipment</h1>
      <Link href="/character-skill">Przejdź do umiejętności postaci</Link>
    </Layout>
  );
}

export default CharacterEquipment;
