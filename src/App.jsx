import './index.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="flex flex-col gap-44">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
