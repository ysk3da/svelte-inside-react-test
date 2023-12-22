import React from 'react';
import './App.css';
// @ts-ignore
import Counter from "./Counter.svelte";
// @ts-ignore
import Hello from "./Hello.svelte";
// @ts-ignore
import LeadSample from "./LeadSample.svelte";
import { SvelteWrapper } from './SvelteWrapper';
import useStore from "./store";

function App() {
  const { count, increment }= useStore();
  
  const SvelteHello = SvelteWrapper(Hello)
  const SvelteCounter = SvelteWrapper(Counter)
  const SvelteLeadSample = SvelteWrapper(LeadSample)
  
  return (
    <>
      <div>
        <SvelteHello
          // @ts-ignore
          extraText="props to Svelte from React!!!"
          onClick={increment}
         />
        <button className='btn btn-success' onClick={increment}>
          count is {count}
        </button>
         <SvelteCounter/>
         <SvelteLeadSample/>
      </div>
    </>
  )
}

export default App
