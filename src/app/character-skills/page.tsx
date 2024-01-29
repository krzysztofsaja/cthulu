"use client";
import SkillCategories from "@/src/shared/components/Skill_categories";
import Layout from "../../shared/components/Layout";
import SkillsCategorySection from "./components/SkillsCategorySection";

function CharacterSkill() {
  return (
    <Layout>
      <p>Character skills</p>
      <SkillsCategorySection></SkillsCategorySection>
    </Layout>
  );
}

export default CharacterSkill;
