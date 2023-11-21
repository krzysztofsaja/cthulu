import React from "react";

export const CharacterPic = (): JSX.Element => {
  return (
    <div className="!absolute !left-[232px] !top-[63px]">
      <div className="relative w-[125px] h-[180px] ">
        <img
          className="absolute w-[125px] h-[53px] top-[127px] left-0"
          alt="Call of cthulhu logo"
          src="./images/CthulhuLogo.png"
        />
        <img 
          className="absolute w-[125px] h-[120px] top-0 left-0" 
          alt="User photo" 
          src="./images/characterPic.png" />
      </div>
    </div>
  );
};

export default CharacterPic;
