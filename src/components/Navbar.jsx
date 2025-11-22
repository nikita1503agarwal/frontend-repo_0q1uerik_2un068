import { useState } from 'react'
import { Menu, X, Stethoscope } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow">
                <Stethoscope size={22} />
              </div>
              <div className="leading-tight">
                <p className="text-sm tracking-wide text-slate-500">Nordic</p>
                <p className="-mt-1 text-xl font-semibold text-slate-900">Med Clinic</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">
                Book Appointment
              </a>
            </nav>

            <button onClick={() => setOpen((s) => !s)} className="rounded-lg p-2 text-slate-700 md:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-slate-200 px-6 py-4 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-sky-700" onClick={() => setOpen(false)}>
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
