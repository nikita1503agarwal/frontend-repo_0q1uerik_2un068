import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Book an Appointment</h2>
        <p className="mt-3 text-slate-600">Leave your details and our team will contact you</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Full name" required />
          <input type="tel" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Phone number" required />
        </div>
        <input type="email" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Email (optional)" />
        <textarea rows="4" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell us about your concern" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">Or call us directly at +91 98400 00000</p>
          <button className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow hover:bg-sky-700" type="submit">
            Request Callback
          </button>
        </div>

        {status && <p className="text-center text-sm text-emerald-700">{status}</p>}
      </form>
    </section>
  )
}
