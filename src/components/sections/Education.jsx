
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'


const education = [
  {
    qualification: 'Bachelor of Technology (B.Tech) in Computer Science',
    institution:
      'D. Y. Patil College of Engineering & Technology, Kolhapur',
    period: 'Add your graduation years',
    description:
      'Studied Computer Science, developing a foundation in programming, software development, databases, and computer science concepts.',
  },
]

const certifications = [
    {
    title: 'React 19: Course 0 to 1 – Fundamentals',
    issuer: 'Coding Shuttle',
    year: '22 March 2025',
  },
  {
    title: 'React 19: Course 1 to 100 – Expert',
    issuer: 'Coding Shuttle',
    year: '28 May 2025',
  },
]

function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Education & credentials
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
          Learning that moves me forward.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <FiBookOpen size={22} className="text-cyan-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <motion.article
                  key={item.qualification}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <p className="text-sm text-cyan-400">{item.period}</p>
                  <h4 className="mt-3 text-lg font-semibold">
                    {item.qualification}
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <FiAward size={22} className="text-cyan-400" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.issuer}
                  </p>
                  <p className="mt-3 text-xs text-cyan-400">{item.year}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
