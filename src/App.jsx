
import { Header, Introduction, About, Projects, CvButton } from './Components';
import './App.scss';

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
      <section className='portfolio__projects'>
        <Projects />
      </section>
      <div className='cvbutton'>
        <CvButton />
      </div>
    </div>
  );
}


export default App;
