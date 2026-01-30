"use client";
import { useTheme } from "./themeProvider"; 

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
        {theme === "light" ? "Dark 🌙" : "Light ☀️"}
    </button>
  );
}