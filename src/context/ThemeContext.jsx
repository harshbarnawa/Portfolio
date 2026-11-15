/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

export const portfolioThemes = [
  { id: "aurora", name: "Aurora Glass" },
  { id: "liquid", name: "Liquid Glass" },
  { id: "monochrome", name: "Monochrome" },
  { id: "brutal", name: "Neo-Brutalism" },
  { id: "bento", name: "Bento Universe" },
  { id: "luxury", name: "Dark Luxury" },
  { id: "editorial", name: "Editorial Swiss" },
  { id: "clay", name: "Claymorphism" },
  { id: "retro", name: "Retro Futurism" },
  { id: "maximal", name: "Maximalist Collage" },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolioTheme")
    return portfolioThemes.some((item) => item.id === saved) ? saved : "aurora"
  })
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("portfolioMode")
    return saved === "dark" ? "dark" : "light"
  })
  const isDark = mode === "dark"

  useEffect(() => {
    localStorage.setItem("portfolioTheme", theme)
    localStorage.setItem("portfolioMode", mode)
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.mode = mode
    document.documentElement.style.colorScheme = mode
  }, [theme, mode])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: portfolioThemes, mode, setMode, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
