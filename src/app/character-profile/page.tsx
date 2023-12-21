import Layout from "../../shared/components/Layout";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import CharacterPic from "@/src/shared/components/CharacterPic";
import CharacterFormButtons from "./components/CharacterFormButtons/CharacterFormButtons";

function CharacterProfile() {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center -mt-14">
        <div className="basis-2/3">
          <CharacterForm />
        </div>
        <div className="ml-3">
          <CharacterPic />
        </div>
      </div>
      <CharacterFormButtons />
      <br />
      <br />
      tutaj powinny być buttony - characteristic/passive/active
    </Layout>
  );
}

export default CharacterProfile;
