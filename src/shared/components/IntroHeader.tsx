import Image from "next/image";

const IntroHeader = () => {
  return (
    <header className="flex justify-center items-center">
      <Image
        src="/images/Logotype.svg"
        alt="Aplication Logo"
        height="92"
        width="247"
      />
    </header>
  );
};
export default IntroHeader;
