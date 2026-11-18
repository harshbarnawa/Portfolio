import { useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { NavLinks } from "../constants/navigation"

function Navbar() {
  const { isDark, theme, setTheme, themes, setMode } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const themePicker = (
    <label className="flex items-center gap-2">
      <span className="text-[9px] uppercase tracking-[1.5px] opacity-60">Theme</span>
      <select
        aria-label="Choose portfolio theme"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        className="theme-select design-action max-w-[160px] rounded-full border px-3 py-2 text-[10px] tracking-wide outline-none transition"
      >
        {themes.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
      </select>
    </label>
  )

  const modeToggle = (
    <button
      type="button"
      onClick={() => setMode(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="mode-toggle design-action inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] uppercase tracking-[1.2px] transition"
    >
      <span aria-hidden="true">{isDark ? "☼" : "◐"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  )

  return (
    <nav className={`border-b fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-colors duration-300 ${isDark ? "border-[#262626]" : "border-[#d8d8d8]"}`}>
      <div className="relative z-20 max-w-5xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between gap-4">
        <div className="relative shrink-0">
          <Link to="/" aria-label="Go to home page">
            <img src="/assets/logo.png" alt="Harsh Barnawa" className={`w-[100px] md:w-[140px] object-contain transition duration-300 ${isDark ? "" : "invert brightness-75 opacity-80"}`} />
          </Link>
          {location.pathname === "/" && <div className="flex justify-center mt-1"><span className={`w-1 h-1 rounded-full ${isDark ? "bg-white" : "bg-[#2f2f2f]"}`} /></div>}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[1.7px]">
            {NavLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `transition-colors ${isActive ? (isDark ? "text-white" : "text-[#222]") : (isDark ? "text-[#b5b5b5] hover:text-white" : "text-[#777] hover:text-black")}`}>
                {label}
              </NavLink>
            ))}
          </div>
          {themePicker}
          {modeToggle}
        </div>

        <div className="md:hidden flex items-center gap-3">
          {modeToggle}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="flex flex-col gap-1 p-1">
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`design-surface md:hidden border-t px-5 py-5 flex flex-col gap-5 text-[11px] uppercase tracking-[2px] relative z-20 ${isDark ? "border-white/15 bg-[#10151a]/95 text-[#bbb]" : "border-black/10 bg-white/90 text-[#777]"}`}>
          <div className="flex flex-wrap items-center gap-4 self-start">{themePicker}</div>
          {NavLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} className={location.pathname === to ? (isDark ? "text-white" : "text-black") : "opacity-70"}>
              {label}{location.pathname === to && " •"}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
