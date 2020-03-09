/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import logo from './logo.svg';
import './App.scss';

function App() {
  let logoItem = useRef('null');
  // console.log(logoItem);
  let textItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    // logoItem.style.display = 'none';
    TweenMax.to(
      logoItem,
      5,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      },
    );
    TweenMax.to(
      textItem,
      5,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 0.2,
      },
    );
  }, []);

  // Learning about hooks: UseEffect and UseRef


  return (
    <div className="App">
      <header className="App-header">
        <img ref={ (el) => { logoItem = el; }}
        src={logo} className="App-logo" alt="logo" />
        <p
        ref={ (el) => { textItem = el; }}>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
