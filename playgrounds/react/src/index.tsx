import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@ds.e/react";
import "@ds.e/scss/lib/Button.css";

ReactDOM.render(
  <Button className="dse-button-container" label="Example Button" />,
  document.querySelector("#root")
);
