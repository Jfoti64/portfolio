import './index.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full max-w-screen-lg">
        <Navbar />
        <section id="home">
          <Intro />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
