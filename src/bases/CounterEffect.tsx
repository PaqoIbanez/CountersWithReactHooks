import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const MAXIMUM_NUMBER = 10;

export const CounterEffect = () => {

   const [counter, setCounter] = useState(5);
   const counterElement = useRef<HTMLHeadingElement>(null);

   useEffect(() => {
      if (counter < 10) return;

      console.log('%cSe llego al numero maximo permitido', 'color:red');
      const timeLine = gsap.timeline();
      timeLine.to(counterElement.current, { y: -10, duration: 0.1, ease: 'ease.out' })
         .to(counterElement.current, { y: 0, duration: 0.6, ease: 'bounce.out' });

   }, [counter])

   const handleClick = () => {
      setCounter(prev => Math.min(prev + 1, MAXIMUM_NUMBER))
      // counter + 1 > MAXIMUM_NUMBER ? setCounter(10) : setCounter(counter + 1);
   }

   return (
      <>
         <h1> CounterEffect: </h1>
         <h2 ref={counterElement}> {counter}  </h2>
         <button onClick={handleClick}> +1 </button>
      </>
   )
}
