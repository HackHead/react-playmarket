// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [secondsLeft, setSecondsLeft] = useState(2);
  const [cls, setCls] = useState('');
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true)
    const timer = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);

    setCls('animate-ping')

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    secondsLeft === 0 ? setTimeout(()=>{setCls('opacity-10')},1000) : null;
  }, [secondsLeft])
    return (
        <div className="w-full
        relative
        h-screen
        bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
        background-animate">
          <div className={`${isLoad ? 'progressBar' : ''}`}></div>
          <span className={`absolute flex h-80 w-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
            <span className={`${cls} absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-20 shadow-2xl`}></span>
          </span>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lgtransition ${secondsLeft <= 0 ? 'hover:bg-transparent hover:duration-300 ' : ''} duration-500 ease-in-out rounded-lg`}>
            <button 
            className={`${secondsLeft > 0 ? 'px-5 py-3' : ''} w-full h-full block  border-none outline-none rounded-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
        background-animate ${secondsLeft <= 0 ? 'hover:text-white transition hover:duration-250' : ''} ease-in-out`} disabled={secondsLeft > 0}>{secondsLeft > 0 ? `Waiting...0${secondsLeft}` : <a className="px-5 py-3 block" href={`${window.googleUrl ? window.googleUrl : ''}`} >Go <span className='arrow" '>&rarr;</span></a>}</button>
          </div>
        </div>
    );
}

export default Home;