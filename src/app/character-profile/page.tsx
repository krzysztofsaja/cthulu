"use client";

import Button from "@/src/shared/components/Button/Button";
import Layout from "../../shared/components/Layout";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import CharacterPic from "@/src/shared/components/CharacterPic";

function CharacterProfile() {
  const backClick = () => {
    console.log("Cofniecie");
    window.history.back();
  };
  const saveClick = () => {
    console.log("zapisane");
  };
  return (
    <Layout>
      <div className="flex flex-wrap justify-center -mt-14">
        <div className="basis-2/3">
          <CharacterForm></CharacterForm>
        </div>
        <div className="ml-3">
          <CharacterPic></CharacterPic>
        </div>
      </div>
      <div className="mt-10 ml-3 mr-3 flex justify-between">
        <Button text={"Back"} handler={backClick}></Button>
        <Button text={"Save"} handler={saveClick}></Button>
      </div>
      <br />
      <br />
      tutaj powinny być buttony - characteristic/passive/active
    </Layout>
  );
}

export default CharacterProfile;
