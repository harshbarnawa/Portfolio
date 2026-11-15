import { useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { NavLinks } from "../constants/navigation"

function Navbar() {
  const { isDark, theme, setTheme, themes } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const themePicker = (
    <label className="flex items-center gap-2">
      <span className="text-[9px] uppercase tracking-[1.5px] opacity-60">Theme</span>
      <select
        aria-label="Choose portfolio theme"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        className="theme-select max-w-[160px] rounded-full border border-white/20 bg-[#111827] px-3 py-2 text-[10px] tracking-wide text-white outline-none transition"
      >
        {themes.map((item) => <option key={item.id} value={item.id} style={{ backgroundColor: "#111827", color: "#ffffff" }}>{item.name}</option>)}
      </select>
    </label>
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

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[1.7px]">
            {NavLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `transition-colors ${isActive ? (isDark ? "text-white" : "text-[#222]") : (isDark ? "text-[#858585] hover:text-white" : "text-[#888] hover:text-black")}`}>
                {label}
              </NavLink>
            ))}
          </div>
          {themePicker}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="flex flex-col gap-1 p-1">
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`w-5 h-[1.5px] ${isDark ? "bg-white" : "bg-black"}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t px-5 py-5 flex flex-col gap-5 text-[11px] uppercase tracking-[2px] relative z-20 ${isDark ? "border-[#262626] bg-[#10151a]/95 text-[#999]" : "border-[#d8d8d8] bg-[#f4f4f1]/95 text-[#777]"}`}>
          <div className="self-start">{themePicker}</div>
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
