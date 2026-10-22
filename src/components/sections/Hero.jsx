
import { motion } from 'framer-motion'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
} from 'react-icons/fi'

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[510px] px-2 pb-5 pt-8 sm:px-4 sm:pt-10 lg:px-0"
    >
      {/* Ambient blue-cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-400/25 to-transparent blur-[65px]"
      />
  
{/* Portrait frame */}
<div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-gradient-to-b from-[#173752] via-[#10243b] to-[#080c16] shadow-2xl shadow-cyan-500/10">

  {/* Decorative grid */}
  <div
    className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
    style={{
      backgroundImage:
        'linear-gradient(rgba(148,163,184,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.7) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    }}
  />

  {/* Blue glow behind the portrait */}
  <div className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[75px]" />

  {/* Decorative rings */}
  <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/25 sm:h-[290px] sm:w-[290px]" />

  <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/20 sm:h-[255px] sm:w-[255px]" />

  {/* Enlarged profile photo */}
  <div className="relative z-[1] flex min-h-[500px] items-end justify-center pt-16 sm:min-h-[590px]">
    <img
      src="/swarada-profile.png"
      alt="Swarada Ware, Software Developer"
      className="relative z-[1] block h-auto w-[112%] max-w-none translate-y-2 object-contain object-bottom sm:w-[118%]"
    />

    {/* Soft fade behind the name card */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-36 bg-gradient-to-t from-[#080c16] via-[#080c16]/55 to-transparent" />
  </div>

  {/* Name card */}
  <div className="absolute inset-x-3 bottom-4 z-20 rounded-2xl border border-white/15 bg-[#080c16]/95 px-4 py-4 shadow-xl backdrop-blur-md sm:inset-x-6 sm:px-6">
    <div className="flex items-center gap-3">
      <span className="h-3 w-3 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />

      <div className="min-w-0">
        <p className="text-base font-semibold text-white">
          Swarada Ware
        </p>
        <p className="mt-1 text-sm leading-5 text-slate-400">
          Software Developer · Exploring AI
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Floating technology badge: upper right */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="absolute right-0 top-12 z-30 flex max-w-[220px] items-center gap-2 rounded-2xl border border-cyan-400/30 bg-[#091524]/95 px-3 py-3 text-xs text-cyan-300 shadow-xl shadow-cyan-950/30 backdrop-blur-xl sm:-right-3 sm:top-16 sm:max-w-none sm:px-5 sm:text-sm"
      >
        <FiCode className="shrink-0" size={19} />
        <span>Building with purpose</span>
      </motion.div>

      {/* Floating approach card: upper left, away from the portrait */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute left-0 top-24 z-30 rounded-2xl border border-blue-400/30 bg-[#0b1728]/95 px-4 py-4 shadow-xl shadow-blue-950/30 backdrop-blur-xl sm:-left-5 sm:top-28 sm:px-5"
      >
        <p className="text-xs text-slate-400 sm:text-sm">
          My approach
        </p>
        <p className="mt-1.5 text-sm font-semibold text-slate-100 sm:text-base">
          Learn. Build. Improve.
        </p>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/5 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-14"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Broad navy-blue-cyan background glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.09] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/[0.10] blur-[130px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Software Developer · Exploring AI Engineering
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Hello, I'm Swarada Ware
          </p>

          <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl xl:text-7xl">
            Building digital
            <br />
            experiences with
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              purpose.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            I build web applications and practical software solutions,
            combining frontend development, backend logic, and databases.
            I'm now expanding my skills toward AI-powered applications.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Explore my work
              <FiArrowDownRight className="ml-2" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Get in touch
              <FiArrowUpRight className="ml-2" />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-slate-400">
            <a
              href="https://github.com/swarada-42"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-cyan-300"
            >
              <FiGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/swaradaware"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-cyan-300"
            >
              <FiLinkedin size={21} />
            </a>

            <span className="text-sm">
              Turning ideas into working products.
            </span>
          </div>
        </motion.div>

        {/* Professional portrait */}
        <div className="relative z-10">
          <HeroVisual />
        </div>
      </div>

      {/* Section divider */}
      <div className="mx-auto mt-16 flex max-w-7xl items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-600">
        <span className="h-px w-10 bg-cyan-400/40" />
        Explore my journey
        <span className="h-px flex-1 bg-white/10" />
      </div>
    </section>
  )
}

export default Hero
