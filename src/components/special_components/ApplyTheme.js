import React, { createContext, useContext, useEffect, useState } from "react";

const ApplyTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    const now = new Date();
    const localHours = now.getHours();
    return localHours >= 18 || localHours < 5;
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