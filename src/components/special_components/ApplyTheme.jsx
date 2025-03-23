import React, { createContext, useContext, useEffect, useState } from "react";

const ApplyTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? savedMode === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark-theme" : "light-theme";

    window.dispatchEvent(new Event("themeChange"));
  }, [darkMode]);

  return (
    <ApplyTheme.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ApplyTheme.Provider>
  );
};

export const useTheme = () => useContext(ApplyTheme);