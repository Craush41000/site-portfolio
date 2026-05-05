"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 border-t border-border overflow-hidden"
    >
      {/* Soft accent backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.08] blur-[140px]"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.16 78) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center"
        >
          03 — Контакты
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-[-0.035em] leading-[1.02] text-center text-balance"
        >
          Давайте работать{" "}
          <span className="italic font-light text-muted-foreground">вместе</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-10 max-w-xl mx-auto text-center text-base md:text-xl text-muted-foreground leading-relaxed text-pretty"
        >
          Расскажите о вашем проекте — обсудим детали, бюджет и сроки.
          Обычно отвечаю в течение 2 часов.
        </motion.p>

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-14 md:mt-20 flex flex-col items-center gap-6"
        >
          <a
            href="https://t.me/Anatoliy_Pimanov"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group relative inline-flex items-center gap-4 pl-8 pr-4 py-4 md:pl-10 md:pr-5 md:py-5 bg-foreground text-background rounded-full text-lg md:text-2xl font-medium tracking-tight hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:w-6 md:h-6"
              aria-hidden
            >
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
            <span>Написать в Telegram</span>
            <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/10 group-hover:bg-background/20 transition-colors">
              <svg
                width="16"
                height="16"
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

          {/* Or email */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">или</span>
            <span className="h-px w-8 bg-border" />
          </div>

          <a
            href="mailto:tolikpimano@mail.ru"
            data-cursor-hover
            className="group inline-flex items-center gap-3 text-base md:text-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="border-b border-border group-hover:border-accent transition-colors">
              tolikpimano@mail.ru
            </span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              →
            </span>
          </a>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Время ответа
            </p>
            <p className="text-base md:text-lg font-medium tracking-tight">До 2 часов</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Часовой пояс
            </p>
            <p className="text-base md:text-lg font-medium tracking-tight">GMT+3 · Москва</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Загрузка
            </p>
            <p className="inline-flex items-center gap-2 text-base md:text-lg font-medium tracking-tight">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Беру 2–3 проекта в месяц
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
