import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If navigating to an anchor on the page, let the browser handle it
    if (hash) {
      // Optional: smooth scroll to the anchor
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return
    }

    // Normal route change -> scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname, hash])

  return null
}
