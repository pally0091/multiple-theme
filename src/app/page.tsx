"use client";
import themes from "@/lib/themes";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./layout";

export default function Home() {
  const [theme, setTheme] = useState(themes.theme1);
  const handleTheme = (newTheme: any) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // console.log(theme);
  return (
    <ThemeProvider value={theme}>
      <div>
        <button onClick={() => handleTheme(themes.theme1.value)}>
          Theme 1
        </button>
        <button onClick={() => handleTheme(themes.theme2.value)}>
          Theme 2
        </button>
        <button onClick={() => handleTheme(themes.theme3.value)}>
          Theme 3
        </button>
        <h1 className="text-3xl font-semibold">Hello World</h1>
        <p>Test Theme project </p>
        <div className="w-32 h-32 bg-primary"></div>
      </div>
    </ThemeProvider>
  );
}
