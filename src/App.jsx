import './index.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col gap-44">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
