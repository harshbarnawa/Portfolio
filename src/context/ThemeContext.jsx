/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

export const portfolioThemes = [
  { id: "aurora", name: "Aurora Glass", mode: "dark" },
  { id: "liquid", name: "Liquid Glass", mode: "dark" },
  { id: "monochrome", name: "Monochrome", mode: "light" },
  { id: "brutal", name: "Neo-Brutalism", mode: "light" },
  { id: "bento", name: "Bento Universe", mode: "dark" },
  { id: "luxury", name: "Dark Luxury", mode: "dark" },
  { id: "editorial", name: "Editorial Swiss", mode: "light" },
  { id: "clay", name: "Claymorphism", mode: "light" },
  { id: "retro", name: "Retro Futurism", mode: "dark" },
  { id: "maximal", name: "Maximalist Collage", mode: "dark" },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolioTheme")
    return portfolioThemes.some((item) => item.id === saved) ? saved : "aurora"
  })
  const activeTheme = portfolioThemes.find((item) => item.id === theme) || portfolioThemes[0]
  const isDark = activeTheme.mode === "dark"

  useEffect(() => {
    localStorage.setItem("portfolioTheme", theme)
    document.documentElement.dataset.theme = theme
    document.documentElement.removeAttribute("data-mode")
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
    localStorage.removeItem("darkMode")
  }, [theme, isDark])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: portfolioThemes, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
