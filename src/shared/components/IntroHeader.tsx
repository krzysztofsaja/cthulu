import Image from "next/image";

const IntroHeader = () => {
  return (
    <header>
      <img 
        className="!absolute !left-[64px] !top-[29px]"
        alt="Logotype"
        src="./images/Logotype.svg"/>
    </header>
  );
};
export default IntroHeader;
