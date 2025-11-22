export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-slate-300">
            We combine experienced physicians with modern diagnostics to deliver accurate treatment plans and faster recovery. Our clinic is designed around patient comfort, efficient service and transparent pricing.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Same-day appointments</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Electronic prescriptions & reports</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Insurance assistance</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Accessible location with parking</li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-slate-800/40 p-3 shadow-xl backdrop-blur">
            <img src="/clinic-team.jpg" alt="Team" className="h-[340px] w-full rounded-2xl object-cover" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
