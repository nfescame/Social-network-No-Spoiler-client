import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ModeContextComponent } from "./context/modeContext/index";
import { AuthContextComponent } from "./context/authContext/index";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextComponent>
      <ModeContextComponent>
        <App />
      </ModeContextComponent>
    </AuthContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
