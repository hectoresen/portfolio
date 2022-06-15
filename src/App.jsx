
import {Introduction, About, Projects, CvButton, TopScrollButton } from './Components';
import './App.scss';
import { useState } from 'react';

function App() {
  const [showBtn, setShowBtn] = useState(false);

  const checkScroll = () =>{
    if(Math.round((document.getElementById('portfolio').scrollTop + document.getElementById('portfolio').clientHeight) / document.getElementById('portfolio').scrollHeight * 100) >= 50){
      setShowBtn(true)
    }else{
      setShowBtn(false)
    }
  }

  return (
    <div className="portfolio" id='portfolio' onScroll={checkScroll}>
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
      {showBtn && (
        <div className='topscrollbutton' id='topscrollbutton'>
          <TopScrollButton />
        </div>
      )}
    </div>
  );
}


export default App;
