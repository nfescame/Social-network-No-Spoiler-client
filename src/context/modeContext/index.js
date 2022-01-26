import React, { useState } from "react";

export const ModeContext = React.createContext({});

export const ModeContextComponent = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};
