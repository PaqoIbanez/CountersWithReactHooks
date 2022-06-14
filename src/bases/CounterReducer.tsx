import { useReducer } from 'react';

interface CounterState {
   counter: number;
   previous: number;
   changes: number;
}

type CounterAction =
   | { type: 'increaseBy', payload: { value: number }; }
   | { type: 'reset' }

const INITIAL_STATE: CounterState = {
   counter: 0,
   previous: 0,
   changes: 0
}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
   switch (action.type) {
      case 'increaseBy':
         return {
            ...state,
            counter: state.counter + action.payload.value,
            changes: state.changes + 1,
            previous: state.counter
         }

      case 'reset':
         return INITIAL_STATE;


      default:
         return state;
   }
}

export const CounterReducerComponent = () => {

   const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

   const increaseBy = (value: number) => {
      dispatch({ type: 'increaseBy', payload: { value } })
   }
   const handleReset = () => {
      dispatch({ type: 'reset' })
   }

   return (
      <>
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
