import React from 'react';
import { useState, useEffect } from "react";
export default function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="settings">
      <h2>Configuraciones ⚙️</h2>
      <p>Modo actual: {theme.toUpperCase()}</p>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Cambiar a Claro" : "🌙 Cambiar a Oscuro"}
      </button>
    </div>
  );
}