import React from "react";
import { SpacingTypes } from "@matoss/foundation";

type ImgElement = React.ImgHTMLAttributes<HTMLImageElement>;

export interface ImageProps extends ImgElement {
  width?: SpacingTypes;
  height?: SpacingTypes;
}

function Image({
  className,
  width = "md",
  height = "md",
  ...rest
}: ImageProps) {
  const classname = `dse-width-${width} dse-height-${height}`;

  return <img className={classname} {...rest} />;
}

export default Image;
