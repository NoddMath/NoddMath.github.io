"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("noddmath-theme");
    return saved === "light" || saved === "dark" ? saved : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      suppressHydrationWarning
      aria-pressed={theme === "light"}
      aria-label={theme === "dark" ? "切换到浅色主题" : "切换到深色主题"}
      title={theme === "dark" ? "浅色主题" : "深色主题"}
      onClick={() => {
        setTheme(nextTheme);
        window.localStorage.setItem("noddmath-theme", nextTheme);
        applyTheme(nextTheme);
      }}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
    </button>
  );
}
