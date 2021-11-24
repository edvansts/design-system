import React from "react";

export interface ButtonProps {
  label: string;
  className?: string;
}

function Button({ label, className }: ButtonProps) {
  return <button className={className}>{label}</button>;
}

export default Button;
