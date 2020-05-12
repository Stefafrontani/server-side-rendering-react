import React from "react";
import ReactDom from "react-dom";

import Home from './Home.jsx'

ReactDom.hydrate(<Home/>, document.getElementById("home-react"));