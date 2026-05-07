"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Кейсы", href: "#works" },
  { label: "Услуги и цены", href: "#services" },
  { label: "Контакты", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            data-cursor-hover
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm md:text-[15px] font-medium tracking-tight text-foreground">
              Анатолий Пиманов
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  data-cursor-hover
                  className="relative px-4 py-2 text-[13px] font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://disk.yandex.ru/i/FUazNYdGPB8MQA"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium tracking-tight text-background bg-foreground hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300"
          >
            CV
            <span className="inline-block w-1 h-1 rounded-full bg-current" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 -mr-2"
            aria-label="Открыть меню"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col h-full pt-28 px-8">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                    className="border-b border-border/60"
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left py-5 text-3xl font-medium tracking-tight text-foreground"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + navLinks.length * 0.05 }}
                  className="border-b border-border/60"
                >
                  <a
                    href="https://disk.yandex.ru/i/FUazNYdGPB8MQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left py-5 text-3xl font-medium tracking-tight text-foreground"
                  >
                    CV
                  </a>
                </motion.li>
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pb-12"
              >
                <a
                  href="https://t.me/Anatoliy_Pimanov"
                  className="flex items-center justify-between w-full px-6 py-5 bg-foreground text-background rounded-2xl text-lg font-medium"
                >
                  <span>Написать в Telegram</span>
                  <span aria-hidden>→</span>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">tolikpimano@mail.ru</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
