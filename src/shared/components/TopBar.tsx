import React from "react";

export const TopBar = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[40px] bg-primarydark">
      <div className="absolute top-[7px] left-[111px] [font-family:'Lexend-SemiBold',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal]">
        Character Profile
      </div>
    </div>
  );
};

export default TopBar;
