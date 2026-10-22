
import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiCode,
  FiArrowUpRight,
} from 'react-icons/fi'

// ========================================
// EXPERIENCE DATA
// ========================================

const experiences = [
  {
    role: 'Software Developer',
    organization: 'IOFT — Institute of Futuristic Technologies',
    type: 'Company Experience',
    period: 'Jan 2025 – Present',
    description:
      'Contribute to software development and web application projects, building practical solutions and developing features based on project requirements.',
    responsibilities: [
      'Developed the official company website using React, JavaScript, and Tailwind CSS.',
      'Worked on software projects involving application development and technical problem-solving.',
      'Independently developed an AI face recognition attendance system.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Python'],
  },
  {
    role: 'Freelance Web Developer',
    organization: 'Independent Client Projects',
    type: 'Freelance',
    period: 'June 2026 – Present',
    description:
      'Develop websites for clients, focusing on professional design, responsive layouts, and clear presentation of business services.',
    responsibilities: [
      'Developed the Metaweld Welding & Metallurgy Consultancy website.',
      'Created service-oriented pages and responsive website layouts.',
      'Worked on translating client requirements into website features.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
]

// ========================================
// EXPERIENCE CARD
// ========================================

function ExperienceCard({ experience, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative sm:pl-16"
    >
      {/* Timeline marker */}
      <div className="absolute left-0 top-7 z-10 hidden h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0b1220] text-cyan-300 shadow-lg transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/10 sm:flex">
        <FiBriefcase size={19} />
      </div>

      {/* Experience card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-900/35 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/50 hover:shadow-[0_16px_45px_rgba(6,182,212,0.05)]">
        {/* Subtle top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

        <div className="p-6 md:p-8">
          {/* Role and date */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-xs font-medium text-cyan-300">
                {experience.type}
              </span>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-100 transition-colors group-hover:text-cyan-200 sm:text-2xl">
                {experience.role}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                {experience.organization}
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-slate-400 sm:text-sm">
              {experience.period}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mt-7">
            <h4 className="mb-4 text-sm font-semibold text-slate-200">
              Key contributions
            </h4>

            <ul className="space-y-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-400/[0.08] text-cyan-300">
                    <FiCode size={12} />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-7 border-t border-white/[0.08] pt-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-cyan-400/20 hover:text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ========================================
// EXPERIENCE SECTION
// ========================================

function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-t border-white/[0.08] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Professional journey
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Experience that
            <br />
            <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
              builds perspective.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
            My professional and client-facing development work, the
            responsibilities I've taken on, and the technologies I've used.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative mt-12 space-y-7 sm:mt-14">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-5 top-8 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent sm:block"
          />

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.organization}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Closing detail */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <FiArrowUpRight className="shrink-0 text-cyan-400" />
          <span>Focused on building useful, reliable digital solutions.</span>
        </div>
      </div>
    </section>
  )
}

export default Experience
