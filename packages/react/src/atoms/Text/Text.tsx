import React, { ReactNode } from "react";
import { FontSizesTypes } from "@matoss/foundation";

export interface TextProps {
  size?: FontSizesTypes;
  children: ReactNode;
}

function Text({ size = "md", children }: TextProps) {
  const className = `dse-text dse-font-size-${size}`;
  return <p className={className}>{children}</p>;
}

export default Text;
