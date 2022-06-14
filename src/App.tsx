import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
import { CounterReducerComponent } from './counter-reducer/CounterReducer'
// import { CounterReducerComponent } from './bases/CounterReducer';

function App() {

   return (
      <>
         <h1>React Pro - Bases</h1>
         <hr />
         <Counter initialValue={5} />
         <br />
         <CounterBy />
         <br />
         <CounterEffect />
         <br />
         <CounterHook />
         <br />
         <CounterReducerComponent />
      </>
   )
}

export default App
