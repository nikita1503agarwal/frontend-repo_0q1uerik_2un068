import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Calm. Caring. Clinical.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg text-slate-600">
            Trusted family healthcare with evidence-based treatment, compassionate doctors, and a soothing environment.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-700">
              Explore Services
            </a>
            <a href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Book Appointment
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <div>
              <span className="text-slate-900">Mon - Sat:</span> 10:30 AM – 8:30 PM
            </div>
            <div>
              <span className="text-slate-900">Weekend:</span> 2:00 PM – 8:30 PM
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <img src="/clinic-hero.jpg" alt="Clinic" className="h-[380px] w-full rounded-2xl object-cover" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200/70" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600 shadow md:block">
            Accredited • Family-friendly • Transparent
          </div>
        </motion.div>
      </div>
    </section>
  )
}
