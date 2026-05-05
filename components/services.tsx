"use client"

import { motion } from "framer-motion"

type Service = {
  number: string
  title: string
  description: string
  items: { name: string; price: string }[]
  highlighted?: boolean
}

const services: Service[] = [
  {
    number: "01",
    title: "Дизайн в Figma",
    description: "Прорабатываем структуру, дизайн-систему и анимации под ваш бренд.",
    items: [
      { name: "Лендинг", price: "35 000 ₽" },
      { name: "Многостраничный сайт", price: "75 000 ₽" },
    ],
  },
  {
    number: "02",
    title: "Сайт под ключ",
    description: "Дизайн в Figma + адаптивная вёрстка на Tilda Zero Block с интеграциями.",
    items: [
      { name: "Лендинг", price: "от 65 000 ₽" },
      { name: "Многостраничный сайт", price: "от 90 000 ₽" },
    ],
    highlighted: true,
  },
  {
    number: "03",
    title: "AI-контент",
    description: "Визуал и тексты для сайта и соцсетей с помощью нейросетей.",
    items: [
      { name: "Продуктовые фото", price: "от 5 000 ₽" },
      { name: "Генерация изображений", price: "от 2 000 ₽" },
      { name: "Копирайтинг", price: "от 3 000 ₽" },
    ],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 border-t border-border"
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
            02 — Услуги
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-balance">
            Услуги и <span className="italic font-light text-muted-foreground">стоимость</span>
          </h2>
        </div>
        <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          Цены ориентировочные — итоговая смета зависит от объёма и сроков.
          Обсудим детали в Telegram.
        </p>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative flex flex-col p-7 md:p-8 lg:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
              service.highlighted
                ? "bg-foreground text-background border-foreground"
                : "bg-card border-border hover:border-foreground/20"
            }`}
          >
            {/* Number */}
            <div className="flex items-center justify-between mb-10 md:mb-14">
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                  service.highlighted ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                {service.number}
              </span>
              {service.highlighted && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-mono bg-accent text-accent-foreground rounded-full">
                  Хит
                </span>
              )}
            </div>

            {/* Title + description */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-medium tracking-[-0.02em] leading-[1.1] mb-4 text-balance">
                {service.title}
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed text-pretty ${
                  service.highlighted ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
            </div>

            {/* Items list */}
            <ul
              className={`space-y-3 mb-8 md:mb-10 pt-6 border-t ${
                service.highlighted ? "border-background/15" : "border-border"
              }`}
            >
              {service.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm md:text-base">{item.name}</span>
                  <span
                    className={`text-sm md:text-base font-medium tabular-nums whitespace-nowrap ${
                      service.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`mt-auto inline-flex items-center justify-between gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                service.highlighted
                  ? "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "bg-secondary text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              <span>Заказать</span>
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
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
