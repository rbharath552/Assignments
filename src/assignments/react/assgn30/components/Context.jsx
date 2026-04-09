import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Custom Hook
const useTheme = () => useContext(ThemeContext);

// 3. Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "light"
            ? "min-h-screen bg-white text-black"
            : "min-h-screen bg-gray-900 text-white"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 4. Any Child Component (no props needed)
const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">
        Current Theme: {theme.toUpperCase()}
      </h1>

      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

// 5. App
const Context= () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default Context;