"use client"

import { useState, useEffect } from "react"

const socials = [
  { label: "Behance", href: "https://www.behance.net/craushnecron" },
  { label: "Dprofile", href: "https://dprofile.ru/anatoliypimanov" },
  { label: "GitHub", href: "https://github.com/Craush41000" },
]

export function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}:${seconds}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative border-t border-border">
      <div className="px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground tracking-tight">
            © {new Date().getFullYear()} Анатолий Пиманов. UX/UI/AI Designer
          </p>

          {/* Socials */}
          <ul className="flex items-center gap-1 -ml-3 md:ml-0">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors duration-300"
                >
                  {s.label}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 12L12 2M12 2H4M12 2V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Local time */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="uppercase tracking-[0.18em] text-muted-foreground">
              МСК
            </span>
            <span className="text-foreground tabular-nums">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
