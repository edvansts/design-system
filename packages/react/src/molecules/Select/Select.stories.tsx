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
  title: "Select",
};

export const Default = () => <Select options={options} />;
