
import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiGithub,
  FiCpu,
  FiShield,
  FiGlobe,
  FiUsers,
  FiShoppingBag,
  FiActivity,
  FiCode,
} from 'react-icons/fi'

// ========================================
// PROJECT DATA
// ========================================

const projects = [
  {
    number: '01',
    title: 'AI Face Recognition Attendance System',
    category: 'AI & Computer Vision',
    description:
      'Independently designed and developed a face recognition-based attendance system from start to finish, integrating computer vision and backend functionality for identity verification and attendance management.',
    features: [
      'End-to-end independent development',
      'Face recognition and identity verification',
      'Attendance recording and management',
    ],
    technologies: ['Python', 'OpenCV', 'Face Recognition', 'FastAPI'],
    icon: FiCpu,
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    status: 'Independently Developed',
    github: '',
    demo: '',
  },
  {
    number: '02',
    title: 'Blockchain-Based Secure Transaction System',
    category: 'Blockchain & Security',
    description:
      'Independently developed a secure transaction system using Python, web technologies, and cryptographic keys, focusing on secure transaction handling and decentralization.',
    features: [
      'Independent end-to-end development',
      'Cryptographic key-based security',
      'Decentralized transaction approach',
    ],
    technologies: ['Python', 'HTML', 'CSS', 'Cryptographic Keys'],
    icon: FiShield,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    status: 'Independently Developed',
    github: '',
    demo: '',
  },
  {
    number: '03',
    title: 'Metaweld Consultancy Website',
    category: 'Freelance / Client Project',
    description:
      'Developed a professional website for a personal client in the welding and metallurgy consultancy industry, presenting technical services and business expertise through a modern web experience.',
    features: [
      'Professional corporate website design',
      'Service-focused pages and navigation',
      'Responsive layouts and SEO-conscious structure',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    icon: FiGlobe,
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    status: 'Client Project',
    github: '',
    demo: '',
  },
  {
    number: '04',
    title: 'Trainer & Parent Connect Platform',
    category: 'Full-Stack Web Application',
    description:
      'Developed features for a platform connecting trainers, students, and parents through session scheduling, homework management, attendance, and progress updates.',
    features: [
      'Session scheduling and attendance',
      'Homework assignment, review, and grading',
      'Parent and student progress views',
    ],
    technologies: ['Node.js', 'Express.js', 'EJS', 'Database'],
    icon: FiUsers,
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    status: 'Project Development',
    github: '',
    demo: '',
  },
  {
    number: '05',
    title: 'IoT Components E-commerce Store',
    category: 'E-commerce',
    description:
      'Built an e-commerce website for IoT components, supporting product discovery, shopping cart functionality, and checkout with payment integration.',
    features: [
      'Product catalogue and shopping cart',
      'Firebase Firestore integration',
      'Razorpay payment integration',
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'Firebase Firestore',
      'Razorpay',
    ],
    icon: FiShoppingBag,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    status: 'Project Work',
    github: '',
    demo: '',
  },
  {
    number: '06',
    title: 'IOFT Official Website',
    category: 'Company Project',
    description:
      'Developed the official website for IOFT (Institute of Futuristic Technologies), creating a modern and responsive online presence for the organization.',
    features: [
      'Responsive company website',
      'Structured presentation of company information',
      'Modern, user-friendly interface',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    icon: FiGlobe,
    accent: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    status: 'Company Project',
    github: '',
    demo: 'https://ioft.info/',
  },
  {
    number: '07',
    title: 'Firebase Attendance Management System',
    category: 'Web Application',
    description:
      'Developed an attendance management application using Firebase, with device validation and location-based checks to support attendance verification.',
    features: [
      'Firebase Realtime Database integration',
      'Registered device validation',
      'GPS-based location verification',
    ],
    technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    icon: FiActivity,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    status: 'Project Work',
    github: '',
    demo: '',
  },
]

// ========================================
// REUSABLE PROJECT CARD
// ========================================

function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: (index % 2) * 0.08,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-900/35 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/55 hover:shadow-[0_16px_45px_rgba(6,182,212,0.06)]"
    >
      {/* Project visual */}
      <div
        className={`relative flex h-48 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        {/* Technical grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.35) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-400/[0.10] blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/[0.16]"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-3xl"
        />

        {/* Project icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.14] bg-[#0b1220]/80 text-cyan-300 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
          <Icon size={35} strokeWidth={1.5} />
        </div>

        {/* Project number */}
        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.2em] text-slate-400">
          PROJECT / {project.number}
        </span>

        {/* Project category */}
        <span className="absolute bottom-4 right-4 max-w-[85%] rounded-full border border-white/10 bg-[#080c16]/80 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Project status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Selected work
          </p>

          <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1 text-xs text-slate-400">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-100 transition-colors duration-300 group-hover:text-cyan-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Key features */}
        <ul className="mt-5 space-y-2.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 text-cyan-400"
              >
                ↗
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Technology tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-2.5 py-1.5 text-xs text-slate-400 transition-colors duration-200 group-hover:border-white/[0.13]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project links */}
        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
              >
                <FiGithub size={17} />
                Source code
                <FiArrowUpRight size={15} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live website for ${project.title}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
              >
                Live website
                <FiArrowUpRight size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

// ========================================
// PROJECTS SECTION
// ========================================

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-white/[0.08] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-32 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Selected work
        </p>

        {/* Section heading */}
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Projects built to
            <br />
            <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
              solve real problems.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
            A selection of my work across AI, application development,
            security concepts, and professional web experiences.
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-2 xl:gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-500">
          <FiCode className="shrink-0 text-cyan-400" />
          <span>
            Building, learning, and improving with every project.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Projects
