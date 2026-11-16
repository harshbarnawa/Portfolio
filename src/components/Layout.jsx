import { useLocation } from "react-router-dom"
import { useTheme, themeBackgroundNames } from "../context/ThemeContext"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SocialDock from "./SocialDock"

function Layout({ children }) {
  const { isDark, theme, mode } = useTheme()
  const location = useLocation()
  const page = location.pathname === "/" ? "home" : location.pathname.slice(1) || "home"
  const backgroundName = themeBackgroundNames[theme]
  const previewUrl = `/assets/backgrounds/previews/${mode}-${backgroundName}-v1.webp`

  return (
    <div
      data-page={page}
      className={`min-h-screen text-sm relative overflow-x-hidden ${isDark ? "text-[#e5e5e5]" : "text-[#2f2f2f]"}`}
    >
      <div
        className="theme-bg-preview"
        style={{ backgroundImage: `url("${previewUrl}")` }}
        aria-hidden="true"
      />
      <Navbar />
      <SocialDock />
      <main className="page-enter" data-page-content={page}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
