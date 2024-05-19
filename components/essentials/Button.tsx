import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const Btn: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
