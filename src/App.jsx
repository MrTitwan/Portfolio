import { useCursor } from './hooks/useCursor';

import Navbar      from './components/Navbar/Navbar';
import Hero        from './components/Hero/Hero';
import Experiences from './components/Experiences/Experiences';
import Projects    from './components/Projects/Projects';
import Skills      from './components/Skills/Skills';
import Contact     from './components/Contact/Contact';
import Footer      from './components/Footer/Footer';

export default function App() {
  useCursor();

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" className="cursor" />

      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
