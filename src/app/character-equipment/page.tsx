"use client"
import Layout from "@/src/shared/components/Layout";
import Link from "next/link";
import SkillList from "@/src/app/character-equipment/components/SkillsList";

function CharacterEquipment() {
  return (
    <Layout>
      <h1>Character Equipment</h1>
      <Link href="/character-skill">Przejdź do umiejętności postaci</Link>
      <SkillList></SkillList>
    </Layout>
  );
}

export default CharacterEquipment;
