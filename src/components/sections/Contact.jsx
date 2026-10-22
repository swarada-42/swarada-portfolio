
import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from 'react-icons/fi'

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-transparent p-8 md:p-14"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get in touch
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          Have an opportunity?
          <br />
          <span className="text-slate-400">Let's connect.</span>
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-slate-400">
          I'm interested in opportunities to build useful software, solve
          technical problems, and continue growing as a developer.
        </p>

        <a
          href="mailto:swaraware612@gmail.com"
          className="mt-8 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          <FiMail className="mr-2" />
          Email me
          <FiArrowUpRight className="ml-2" />
        </a>

        <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6">
          <a
            href="https://github.com/swarada-42"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <FiGithub size={19} />
            GitHub
            <FiArrowUpRight size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/swaradaware"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <FiLinkedin size={19} />
            LinkedIn
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>

      <footer className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Swarada Ware. All rights reserved.</p>
        <a href="#home" className="transition hover:text-cyan-300">
          Back to top ↑
        </a>
      </footer>
    </section>
  )
}

export default Contact
