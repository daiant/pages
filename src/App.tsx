import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import { Navigation } from './components/Navigation';
import { Index } from './components/Index';
import { Projects } from './components/Projects';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Game } from './components/Game';
import { Scroll } from './components/Scroll';

function App() {
  const dot: any = useRef(null);
  const dotOutline: any = useRef(null);

  const visible = useRef(true);
  const enlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const mouseMoveEvent = (e: any) => {
      endX.current = e.clientX;
      endY.current = e.clientY;

      dot.current.style.top = endY.current + 'px';
      dot.current.style.left = endX.current + 'px';
      dotOutline.current.style.top = endY.current + 'px';
      dotOutline.current.style.left = endX.current + 'px';

  }

  const mouseOverEvent = () => {
      dot.current.style.width = '40px';
      dot.current.style.height = '40px';
      dotOutline.current.style.width = '40px';
      dotOutline.current.style.height = '40px';
    }
  const mouseOutEvent = () => {
    dot.current.style.width = '25px';
    dot.current.style.height = '25px';
    dotOutline.current.style.width = '25px';
    dotOutline.current.style.height = '25px';
  }
  const mouseUpEvent = () => {
    // let ripple: any = document.getElementsByClassName("ripple")[0];
    let ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.top = dot.current.style.top;
    ripple.style.left = dot.current.style.left;
    ripple.classList.add("up");
    document.body.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }  
  
  useEffect(() => {
    visible.current = window.innerWidth > 768;
    if(visible.current) {
      dot.current.style.display = 'block';
      dotOutline.current.style.display = 'block';
    }
    let hover_elements = document.getElementsByClassName("hover-me");
    for(let elem of hover_elements as any) {
      elem.addEventListener("mouseover", mouseOverEvent);
      elem.addEventListener("mouseout", mouseOutEvent);
    }
    document.addEventListener('mousemove', mouseMoveEvent);
    //document.addEventListener('mouseover', mouseOverEvent);
    document.addEventListener('click', mouseUpEvent);
    return () => {
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseover', mouseOverEvent);
}
  }, []);

  return (
      <main className='main_content'>
        <Navigation />
        <Index />
        <Projects />
        <About />
        <Contact />
        <Game dot={dot} dotOutline={dotOutline}></Game>
        <Scroll />
      </main>
    
  );
}

export default App;
