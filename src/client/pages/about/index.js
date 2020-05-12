import React from "react";
import ReactDom from "react-dom";

import About from './About.jsx'

ReactDom.hydrate(<About/>, document.getElementById("about-react"));