import { FC, useState } from 'react';

interface Props{
   initialValue?: number;
}
 
export const Counter:FC<Props> = ({ initialValue = 0 }) => {

   const [counter, setCounter] = useState(initialValue);

   const handleClick = () => {
      setCounter(counter + 1);
   }

   return (
      <>
         <h1>Counter: {counter} </h1>
         <button onClick={handleClick}>
            Counter
         </button>
      </>
   )
}
