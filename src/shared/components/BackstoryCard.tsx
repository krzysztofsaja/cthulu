interface CardProps {
    text: string;
  }

  function BackstoryCard({ text, }: CardProps) {
  return (
    <div className="w-80 h-24 rounded-md border-none">
      <div className="h-7 bg-primary text-white text-center font-bold rounded-tr rounded-tl border-none text-lg">
        {text}
      </div>
      <textarea className="h-20 w-80 bg-textBg border-none rounded-bl rounded-br p-4"
        placeholder="Type here..."
      />
    </div>
  );
};

export default BackstoryCard;