import { Navigation } from './components/Navigation';
import { Index } from './components/Index';
import { Projects } from './components/Projects';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {

  return (
    <main className='main_content'>
      <Navigation />
      <Index />
      <Projects />
      <About />
      <Contact />
    </main>

  );
}

export default App;
