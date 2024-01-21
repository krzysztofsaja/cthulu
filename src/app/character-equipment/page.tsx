import Layout from "@/src/shared/components/Layout";
import Link from "next/link";
import { GearAndPossessions } from "./components/GearAndPossessions/GearAndPossessions";

function CharacterEquipment() {
  return (
    <Layout>
      <GearAndPossessions></GearAndPossessions>
    </Layout>
  );
}

export default CharacterEquipment;
