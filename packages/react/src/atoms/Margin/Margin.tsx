import React, { ReactNode } from "react";
import { SpacingTypes } from "@matoss/foundation";

export interface MarginProps {
  children: ReactNode;
  space?: SpacingTypes;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

function Margin({
  children,
  space = "md",
  left,
  right,
  top,
  bottom,
}: MarginProps) {
  let classname = ``;

  if (!top && !right && !bottom && !left) {
    classname = `dse-margin-${space}`;
  }

  if (left) {
    classname = `${classname} dse-margin-left-${space}`;
  }

  if (right) {
    classname = `${classname} dse-margin-right-${space}`;
  }

  if (top) {
    classname = `${classname} dse-margin-top-${space}`;
  }

  if (bottom) {
    classname = `${classname} dse-margin-bottom-${space}`;
  }

  return <div className={classname}>{children}</div>;
}

export default Margin;
