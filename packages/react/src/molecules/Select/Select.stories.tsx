import React from "react";

import Select from "./Select";
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/Select.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
    key: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
    key: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "sweet-pink",
    key: "sweet-pink",
  },
];

export default {
  title: "Molecules | Select",
};

export const Default = () => <Select options={options} />;

export const RenderOption = () => {
  return (
    <Select
      options={options}
      renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
        <span {...getOptionRecommendedProps()}>
          {option.label} {isSelected ? "SELECTED" : ""}
        </span>
      )}
    />
  );
};

export const CustomLabel = () => {
  return <Select options={options} placeholder="Select a color" />;
};

export const OnOptionSelected = () => {
  return <Select options={options} />;
};
