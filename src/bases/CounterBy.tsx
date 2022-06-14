import { FC, useState } from 'react';

interface Props {
   initialValue?: number;
}

interface CounterProps {
   counter: number;
   clicks: number;
}

export const CounterBy: FC<Props> = ({ initialValue = 5 }) => {

   const [counterState, setCounterState] = useState<CounterProps>({
      counter: initialValue,
      clicks: 0
   });

   const handleClick = (sum: number) => {
      setCounterState({
         counter: counterState.counter + sum,
         clicks: counterState.clicks + 1
      });
   }

   return (
      <>
         <h1> CounterBy: {counterState.counter} </h1>
         <h1> Clicks: {counterState.clicks} </h1>
         <button onClick={() => handleClick(1)}> +1 </button>
         <button onClick={() => handleClick(5)}> +5 </button>
      </>
   )
}
