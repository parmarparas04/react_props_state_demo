import { ReactNode } from "react";

import React from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  textColor: any;
  bgColor: any;
}
const Button = ({ textColor, bgColor, onClick, children }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
