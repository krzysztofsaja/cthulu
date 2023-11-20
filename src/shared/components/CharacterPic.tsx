import Image from "next/image";
import "./style.css";

const CharacterPic = () => {
  return (
    <div className="characterpic">
    <Image className="call-of-cthulhu-logo" alt="Call of cthulhu logo" src="/images/CthulhuLogo.png" width="125" height="53" />
    <Image className="user-photo" alt="User photo" src="/images/characterPic.png" height="180" width="125" />
  </div>
  );
};
export default CharacterPic;
