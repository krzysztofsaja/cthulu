import Image from "next/image";

const CharacterPic = () => {
  return (
    <div className="flex-col justify-center items-center">
      <Image
        src="/images/characterPic.png"
        alt="Picture of character"
        height="120"
        width="125"
      />
      <br />
      <Image
        src="/images/CthulhuLogo.png"
        alt="CoC Logotype"
        height="53"
        width="125"
      />
    </div>
  );
};
export default CharacterPic;
