import Link from "next/link";

const ButtonCreateNewChar = () => {
  return (
    <div className="flex w-80 h-16 items-center justify-center bg-white font-bold">
      <Link href="/character-profile">
      Create New Character
      </Link>
    </div>
  );
};
export default ButtonCreateNewChar;
