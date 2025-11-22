export default function Gallery() {
  const images = [
    { src: '/clinic-hero.jpg', alt: 'Reception area' },
    { src: '/clinic-team.jpg', alt: 'Medical team' },
    { src: '/clinic-hero.jpg', alt: 'Diagnostic room' },
  ]

  return (
    <section aria-label="Clinic gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-2">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Space</h2>
          <p className="mt-3 text-slate-600">Bright, hygienic, and thoughtfully designed for comfort</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <img src={img.src} alt={img.alt} className="h-56 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-slate-200/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
