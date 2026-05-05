"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { HeroBackground } from "./hero-background"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={containerRef}
      className="relative min-h-svh w-full overflow-hidden flex items-center pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <HeroBackground />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full px-6 md:px-10 lg:px-16"
      >
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-12 md:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              UX / UI / AI Designer
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              Доступен для проектов
            </span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[40px] sm:text-6xl md:text-7xl lg:text-[104px] leading-[1.02] tracking-[-0.035em] font-medium text-balance"
          >
            Разрабатываю сайты
            <br />
            с современным{" "}
            <span className="relative inline-block">
              <span className="italic font-light text-accent">дизайном</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12 max-w-2xl text-lg md:text-2xl leading-relaxed text-muted-foreground text-pretty"
          >
            и максимальной пользой для вашего дела.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 bg-foreground text-background rounded-full text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <span>Обсудить проект</span>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 group-hover:bg-background/20 transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M2 12L12 2M12 2H4M12 2V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
        >
          {[
            { label: "Опыт", value: "5 лет" },
            { label: "Проектов", value: "80+" },
            { label: "Стек", value: "Figma · Tilda · AI" },
            { label: "Локация", value: "Удалённо" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="text-base md:text-lg font-medium tracking-tight text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
