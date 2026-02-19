import Navbar       from '@/components/layout/Navbar'
import CustomCursor  from '@/components/layout/CustomCursor'
import Footer        from '@/components/layout/Footer'
import Hero          from '@/components/sections/Hero'
import Experience    from '@/components/sections/Experience'
import Projects      from '@/components/sections/Projects'
import Contact       from '@/components/sections/Contact'
import RevealObserver from '@/components/ui/RevealObserver'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
