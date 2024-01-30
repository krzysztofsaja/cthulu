 favicon
import CharacterEquipment from "@/src/shared/components/CharacterEquipment";
import Layout from "@/src/shared/components/Layout";

"use client"
import Layout from "@/src/shared/components/Layout";
import { GearAndPossessions } from "./components/GearAndPossessions/GearAndPossessions";
import SkillList from "@/src/app/character-equipment/components/SkillsList";
 main

function CharacterEquipmentPage() {
  return (
    <Layout>
 favicon
      <h1>Character Equipment</h1>
      <CharacterEquipment></CharacterEquipment>

      <GearAndPossessions></GearAndPossessions>
      <SkillList></SkillList>
 main
    </Layout>
  );
}

export default CharacterEquipmentPage;
