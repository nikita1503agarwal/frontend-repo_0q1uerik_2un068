import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Trust from './components/Trust'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nordic Med Clinic. All rights reserved.
      </footer>
    </div>
  )
}

export default App
