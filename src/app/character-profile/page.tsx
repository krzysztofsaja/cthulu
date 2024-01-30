import Layout from "../../shared/components/Layout";
import CharacterForm from "../../shared/components/character-form";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterPic from "@/src/shared/components/CharacterPic";
import GoldButtons from "@/src/shared/components/GoldButtons";
import { CharacteristicPassive } from "./components/CharacteristicPassive/CharacteristicPassive";


function CharacterProfile() {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
      <div className="basis-2/3"><CharacterForm></CharacterForm></div>
      <div className="ml-3"><CharacterPic></CharacterPic></div>
      </div>
      <div className="mt-10 ml-3 mr-3"><GoldButtons></GoldButtons></div>
      <div className="mt-10">
      <CharacteristicPassive></CharacteristicPassive>
      </div>
      tutaj powinna być lista characteristics active
    </Layout>
    
  );
}

export default CharacterProfile;
