import { ShieldCheck, Star, Award, HeartPulse } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, title: 'Accredited Care', desc: 'Safety-first protocols' },
  { icon: Star, title: '4.9/5 Rating', desc: 'Patient recommended' },
  { icon: Award, title: '15+ Years', desc: 'Clinical excellence' },
  { icon: HeartPulse, title: '20k+ Patients', desc: 'Trusted by families' },
]

export default function Trust() {
  return (
    <section aria-label="Trust markers" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-700 ring-1 ring-slate-200">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
