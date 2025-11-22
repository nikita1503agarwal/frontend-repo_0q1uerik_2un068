export default function CTA() {
  return (
    <section aria-label="Call to action" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">Need medical advice today?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Book a same-day appointment or start a tele-consult with our experienced physicians.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow hover:bg-sky-700">Book Now</a>
            <a href="#services" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">View Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
