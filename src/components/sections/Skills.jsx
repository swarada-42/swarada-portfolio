
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiTool } from 'react-icons/fi'

const skillGroups = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router', 'Tailwind CSS'],
  },
  {
    icon: FiDatabase,
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    icon: FiCpu,
    title: 'Programming & AI',
    skills: ['Python', 'AI-assisted development', 'LLM integration — learning'],
  },
  {
    icon: FiTool,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Firebase', 'REST APIs', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technical toolkit
        </p>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Skills I work with.
          </h2>
          <p className="max-w-md leading-7 text-slate-400">
            A growing toolkit for building, integrating, and improving
            software applications.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map(({ icon: Icon, title, skills }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <Icon size={22} className="text-cyan-400" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
