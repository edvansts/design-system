import React from "react";

import { Color, Image } from "@ds.e/react";
import "@ds.e/scss/lib/Utilities.css";

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
    </div>
  );
}
