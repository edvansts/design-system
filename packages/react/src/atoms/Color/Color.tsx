import React, { ReactNode } from "react";
import { SpacingTypes } from "@ds.e/foundation";

export interface ColorProps {
  hexCode: string;
  children: ReactNode;
  width?: SpacingTypes;
  height?: SpacingTypes;
}

function Color({ hexCode, children, height = "sm", width = "sm" }: ColorProps) {
  const classname = `dse-width-${width} dse-height-${height}`;

  return (
    <div className={classname} style={{ backgroundColor: hexCode }}>
      {children}
    </div>
  );
}

export default Color;
