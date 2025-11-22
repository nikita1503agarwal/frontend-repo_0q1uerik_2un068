import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Expert Care, Modern Comfort
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg text-slate-300">
            A patient-first clinic offering family medicine, gynecology, pediatrics, lab services and more with short wait times.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-3 font-semibold text-white shadow hover:opacity-90">
              Explore Services
            </a>
            <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">
              Book Appointment
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
            <div>
              <span className="text-white">Mon - Sat:</span> 10:30 AM – 8:30 PM
            </div>
            <div>
              <span className="text-white">Weekend:</span> 2:00 PM – 8:30 PM
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-slate-800/40 p-3 shadow-xl backdrop-blur">
            <img src="/clinic-hero.jpg" alt="Clinic" className="h-[380px] w-full rounded-2xl object-cover" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-800/60 p-3 text-sm text-slate-200 shadow md:block">
            24/7 Support • Quality Care • Trusted Doctors
          </div>
        </motion.div>
      </div>
    </section>
  )
}
