import React from "react";
import Color from "./Color";
import { text, select } from "@storybook/addon-knobs";
import { Spacing } from "@matoss/foundation";

import "@matoss/scss/lib/Utilities.css";

export default {
  title: "Atoms | Color",
};

export const Common = () => <Color hexCode={text("HexCode", "pink")} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "xxxl")}
    height={select("Height", Object.values(Spacing), "xxxl")}
  />
);
