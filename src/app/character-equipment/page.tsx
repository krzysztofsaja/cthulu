"use client"
import Layout from "@/src/shared/components/Layout";
import { GearAndPossessions } from "./components/GearAndPossessions/GearAndPossessions";
import SkillList from "@/src/app/character-equipment/components/SkillsList";

function CharacterEquipment() {
  return (
    <Layout>
      <GearAndPossessions></GearAndPossessions>
      <SkillList></SkillList>
    </Layout>
  );
}

export default CharacterEquipment;
