import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

   const { counter, handleClick, elementToAnimate } = useCounter({ MAXIMUM_NUMBER: 15 });

   return (
      <>
         <h1 ref={elementToAnimate}> CounterHook: </h1>
         <h2> {counter}  </h2>
         <button onClick={handleClick}> +1 </button>
      </>
   )
}
