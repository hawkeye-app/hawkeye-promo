import React from "react";

type ButtonProps = {
  label: string;
  purpose: "button" | "reset" | "submit";
};

const Button: React.FC<ButtonProps> = ({ label, purpose }) => {
  return (
    <button type={purpose} className="flex items-center justify-center px-[32px] py-[14px] bg-brand-1 hover:bg-brand-2 transition-all ease-in-out duration-200 rounded-md font-jakarta font-bold text-sm text-blue-1">
      {label}
    </button>
  );
};
export default Button;
