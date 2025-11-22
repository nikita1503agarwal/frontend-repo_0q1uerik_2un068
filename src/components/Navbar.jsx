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
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-lg">
                <Stethoscope size={22} />
              </div>
              <div className="leading-tight">
                <p className="text-sm tracking-wide text-slate-300">Nordic</p>
                <p className="-mt-1 text-xl font-semibold text-white">Med Clinic</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-200/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
                Book Appointment
              </a>
            </nav>

            <button onClick={() => setOpen((s) => !s)} className="rounded-lg p-2 text-white md:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-white/10 px-6 py-4 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-3 py-2 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
