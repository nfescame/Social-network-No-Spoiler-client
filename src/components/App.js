import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { ModeContext } from "../context/modeContext";
import "./App.css";
import Router from "../router";
function App() {
  const { darkMode } = React.useContext(ModeContext);
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Fuzzy Bubbles",
        "cursive",
        "Lato",
        "sans",
        "serif",
        "Lora",
        "Noto Serif Display",
        "Pushster",
        "cursive",
        "Zen Antique Soft",
        "Zen Kurenaido",
        "sans",
      ],
    },
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: blue,
      secondary: blueGrey,
      background: {
        dark: darkMode ? "#303030" : "#e5e5e5e5",
        paper: !darkMode ? "#232323" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
