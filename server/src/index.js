import React from "react";
import ReactDOM from "react-dom";

/** Import React App **/
import App from "./App";

/** Import stylesheets **/
import "./styles/normalize.scss";
import "./styles/reset.local.scss";
import "./index.scss";

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);
