import Link from "next/link";
import Layout from "../../shared/components/Layout";

function CharacterSkill() {
  return (
    <Layout>
      <h1>Character Skill</h1>
      <Link href="/backstory">Przejdź do historii postaci</Link>
    </Layout>
  );
}

export default CharacterSkill;
