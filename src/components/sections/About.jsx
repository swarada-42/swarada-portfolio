
import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiTarget } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Practical Development',
    text: 'Building web applications that solve real-world problems.',
  },
  {
    icon: FiLayers,
    title: 'Full-Stack Perspective',
    text: 'Working across user interfaces, backend logic, and databases.',
  },
  {
    icon: FiTarget,
    title: 'Continuous Learning',
    text: 'Growing toward AI-forward development and intelligent applications.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-white/[0.08] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Subtle section glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        {/* About introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Curious mind.
            <br />
            <span className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
              Developer mindset.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            I'm a software developer who enjoys turning ideas into practical
            digital solutions. Through my projects, I've worked on web
            interfaces, application workflows, database integration, and
            features designed around real user needs.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
            I'm continuing to strengthen my software development skills while
            exploring AI-forward engineering and the integration of AI
            capabilities into useful applications.
          </p>

          <div className="mt-8 h-px w-24 bg-gradient-to-r from-cyan-400/70 to-transparent" />
        </motion.div>

        {/* Highlight cards */}
        <div className="grid content-center gap-4">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/65 hover:shadow-[0_12px_40px_rgba(6,182,212,0.06)] md:p-6"
            >
              {/* Fine accent line */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/15 to-blue-500/[0.04] text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/25 group-hover:text-cyan-200">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-cyan-200 md:text-lg">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
