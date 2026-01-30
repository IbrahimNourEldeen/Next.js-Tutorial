"use client";
import { useTheme } from "./themeProvider";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={
        theme === "light"
          ? "bg-gray-800 text-white absolute p-2 rounded-2xl"
          : "bg-white text-gray-800 absolute p-2 rounded-2xl"
      }
    >
      {theme === "light" ? "Dark 🌙" : "Light ☀️"}
    </button>
  );
}
