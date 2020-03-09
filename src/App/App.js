/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';

import './App.scss';


function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 1, { width: 200, height: 200, ease: Power3.easeOut });
    setState(true);
  };
  const handleShrink = () => {
    TweenMax.to(circleRed, 1, { width: 75, height: 75, ease: Power3.easeOut });
    setState(false);
  };

  useEffect(() => {
    // console.log(circle, circleRed, circleBlue);
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    // TweenMax.from(circle, 5, { opacity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 5, {
    //   opacity: 0, x: 40, ease: Power3.easeOut, delay: 0.5,
    // });
    // TweenMax.from(circleBlue, 5, {
    //   opacity: 0, x: 40, ease: Power3.easeOut, delay: 1,
    // });
    TweenMax.staggerFrom([circle, circleBlue, circleRed], 5, { opacity: 0, x: 40, ease: Power3.easeOut }, 0.2);
  }, []);

  return (
    <div
    ref= { (el) => { app = el; }}
    className="App">
      <header className="App-header">
        <div className="circle-container">
          <div
          ref={ (el) => { circle = el; }}
          className="circle"></div>
          <div
          onClick={ state !== true ? handleExpand : handleShrink }
          ref={ (el) => { circleRed = el; }}
          className="circle red"></div>
          <div
          ref={ (el) => { circleBlue = el; }}
          className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
