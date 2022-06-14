import { useReducer } from 'react';
import { CounterAction, doIncreaseBy, doReset } from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/CounterReducer';

const INITIAL_STATE: CounterState = {
   counter: 0,
   previous: 0,
   changes: 0
}

export const CounterReducerComponent = () => {

   const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

   const increaseBy = (value: number) => {
      dispatch(doIncreaseBy(value))
   }
   const handleReset = () => {
      dispatch(doReset())
   }

   return (
      <>
         <h1>Counter Reducer Segmentado</h1>
         <h2>Counter: {state.counter}</h2>
         <h2>Previous: {state.previous}</h2>
         <h2>Changes: {state.changes}</h2>
         <button onClick={() => increaseBy(1)}>
            +1
         </button>
         <button onClick={() => increaseBy(5)}>
            +5
         </button>
         <button onClick={() => increaseBy(10)}>
            +10
         </button>
         <button onClick={handleReset} style={{ marginLeft: '20px' }}>
            Reset
         </button>
      </>
   )
}
