"use client";

import { createContext, useContext, useState } from "react";
import { ThemeSwitcher } from "./toggle";

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
      <div
        className={
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }
      >
        <div>
            <ThemeSwitcher/>
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
export const useTheme = ()=>useContext(ThemeContext);
