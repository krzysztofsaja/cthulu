"use client";
import Button from "@/src/shared/components/Button/Button";
import Link from "next/link";

function CharacterFormButtons() {
  const saveClick = () => {
    console.log("zapisane");
  };
  return (
    <div className="mt-10 ml-3 mr-3 flex justify-between">
      <Link href="/">
        <Button text={"Back"} handler={() => {}}></Button>
      </Link>
      <Button text={"Save"} handler={saveClick}></Button>
    </div>
  );
}

export default CharacterFormButtons;
