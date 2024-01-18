
"use client";
import Link from "next/link";
import Layout from "../../shared/components/Layout";
import SkillsCategorySection from "./components/SkillsCategorySection";

function CharacterSkill() {
  return (
    <Layout>
      <h1>Character Skill</h1>
      <SkillsCategorySection />
      <Link href="/backstory">Przejdź do historii postaci</Link>
    </Layout>
  );
}

export default CharacterSkill;
