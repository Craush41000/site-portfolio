"use client"

import { motion } from "framer-motion"

const projects = [
  {
    category: "Медицинский сайт",
    title: "Сайт для российского препарата Тирзетта от Промомед",
    description:
      "Медицинский промо-сайт с фокусом на научную доказательность и доверие. Представлен инновационный препарат для снижения веса на базе тирзепатида.",
    image: "/case-tirzetta.png",
    year: "2025",
    href: "https://tirzetta.com/",
    accent: "oklch(0.78 0.16 78)",
  },
  {
    category: "Сайт для PR-студии",
    title: "Сайт для коммуникационной студии Просвет",
    description:
      "Дизайн и вёрстка под ключ на Tilda для PR-студии, специализирующейся на стратегических коммуникациях и продвижении брендов. Кейсы, команда, услуги — в одном лаконичном решении.",
    image: "/case-prosvet.png",
    year: "2026",
    href: "https://prosvet-pr.pro/",
    accent: "oklch(0.78 0.16 78)",
  },
  {
    category: "IT-корпоративный сайт",
    title: "Корпоративный сайт для IT-аутсорсера INTELTEL",
    description:
      "Дизайн для российской IT-компании полного цикла — от продажи оборудования до сервисного обслуживания. Светлый корпоративный стиль под B2B-аудиторию.",
    image: "/case-inteltel.png",
    year: "2025",
    href: "https://inteltel.ru/",
    accent: "oklch(0.78 0.16 78)",
  },
  {
    category: "Игровой спецпроект",
    title: "Тематическая игра ко Дню компьютерной безопасности для ГК Солар",
    description:
      "Интерактивная промо-страница в игровом формате для знакомства аудитории с продуктами бренда и повышения лояльности.",
    image: "/case-solar-game.png",
    year: "2025",
    href: "https://rt-solar.ru/computer_security_day/?ysclid=mi750rebcq192801147",
    accent: "oklch(0.78 0.16 78)",
  },
]

export function Works() {
  const showMoreProjects = false

  return (
    <section
      id="works"
      className="relative scroll-mt-24 px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            01 — Кейсы
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-balance">
            Избранные <span className="italic font-light text-muted-foreground">работы</span>
          </h2>
        </div>
        <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          Несколько проектов из портфолио — лендинги, корпоративные сайты и
          AI-контент для брендов из разных индустрий.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            <a
              href={project.href}
              data-cursor-hover
              className="block bg-card border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-foreground/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border/60">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium tracking-[-0.02em] leading-[1.15] text-balance">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 text-pretty">
                  {project.description}
                </p>

                <div className="flex items-end justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    Подробнее
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
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
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {project.year}
                  </span>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>

      {/* See all link (hidden, code preserved) */}
      {showMoreProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="#contact"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-full hover:border-foreground/40 transition-colors duration-300"
          >
            Показать ещё проекты
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      )}
    </section>
  )
}
