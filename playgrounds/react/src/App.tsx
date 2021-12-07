import React from "react";

import { Color, Image, Text, Margin, Select } from "@matoss/react";
import "@matoss/scss/lib/Utilities.css";
import "@matoss/scss/lib/Margin.css";
import "@matoss/scss/lib/Text.css";
import "@matoss/scss/lib/Select.css";

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

export default function App() {
  return (
    <div>
      dasdnashbdhasbhdajsdjasdashdahsbdh
      <Color hexCode="green" width="xl" height="xl">
        Hello World
      </Color>
      <Image
        src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
        width="xxxl"
        height="xxxl"
      />
      <Margin space="xl">
        <Text size="xl">Hello guys</Text>
      </Margin>
      <Select
        options={options}
        onOptionSelected={(option) => console.log(option)}
        renderOption={({ getOptionRecommendedProps, option }) => (
          <span {...getOptionRecommendedProps()}>{option.label}</span>
        )}
      />
    </div>
  );
}
