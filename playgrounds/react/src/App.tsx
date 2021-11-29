import React from "react";

import { Color, Image, Text, Margin } from "@ds.e/react";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Text.css";

export default function App() {
  return (
    <div>
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

      <Text size="md">Hello world</Text>
    </div>
  );
}
