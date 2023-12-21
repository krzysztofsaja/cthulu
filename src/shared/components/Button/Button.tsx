"use client";

interface ButtonProps {
  text: string;
  handler: () => void;
}
function Button({ text, handler }: ButtonProps) {
  return (
    <button
      onClick={handler}
      className="bg-secondary w-24 h-10 rounded-xl font-bold text-white"
    >
      {text}
    </button>
  );
}

export default Button;
