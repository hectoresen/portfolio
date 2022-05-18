
import { Header, Introduction, About, Cv, Projects } from './Components';
import { useEffect } from 'react';
import 'animate.css';
import './App.scss';
import ScrollTopArrow from './Hooks/ScrollTopArrow/ScrollTopArrow';

function App() {

  return (
    <div className="portfolio">
      <header>
        <Header />
      </header>
      <div className='portfolio__introduction'>
        <Introduction />
      </div>
      <section className='portfolio__about'>
        <About />
      </section>
      <section className='portfolio__CV'>
        <Cv />
      </section>
      <section className='portfolio__projects'>
        <Projects />
      </section>
      <ScrollTopArrow />
    </div>
  );
}

export default App;
