import { HeartPulse, Baby, FlaskConical, Syringe, Stethoscope, Microscope } from 'lucide-react'

const services = [
  { icon: HeartPulse, title: 'Family Medicine', desc: 'Primary care for all ages with personalized attention.' },
  { icon: Baby, title: 'Pediatrics', desc: 'Compassionate care for infants, children, and adolescents.' },
  { icon: Syringe, title: 'Gynecology', desc: 'Complete women’s health including antenatal checkups.' },
  { icon: FlaskConical, title: 'Lab Services', desc: 'On-site diagnostics, blood tests, and health screening.' },
  { icon: Microscope, title: 'Dermatology', desc: 'Diagnosis and treatment of skin, hair and nail conditions.' },
  { icon: Stethoscope, title: 'Tele-Consultation', desc: 'Virtual visits and follow-ups from the comfort of your home.' },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Services</h2>
        <p className="mt-3 text-slate-600">Comprehensive treatments delivered with empathy and expertise</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
