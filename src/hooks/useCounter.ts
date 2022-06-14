import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";

interface Props {
   initialNumber?: number;
   MAXIMUM_NUMBER: number;
}
export const useCounter = ({ initialNumber = 0, MAXIMUM_NUMBER }: Props) => {

   const [counter, setCounter] = useState(initialNumber);
   const elementToAnimate = useRef<any>(null);

   const timeLine = useRef(gsap.timeline());

   useLayoutEffect(() => {
      if (!elementToAnimate.current) return;
      timeLine.current.to(elementToAnimate.current, { y: -10, duration: 0.1, ease: 'ease.out' })
         .to(elementToAnimate.current, { y: 0, duration: 0.6, ease: 'bounce.out' })
         .pause();
   }, [])

   useEffect(() => {
      // if (counter < MAXIMUM_NUMBER) return;
      // console.log('%cSe llego al numero maximo permitido', 'color:red');
      timeLine.current.play(0.6);
   }, [counter])

   const handleClick = () => {
      setCounter(prev => Math.min(prev + 1, MAXIMUM_NUMBER))
      // counter + 1 > MAXIMUM_NUMBER ? setCounter(10) : setCounter(counter + 1);
   }


   return {
      counter,
      handleClick,
      elementToAnimate
   }
}
