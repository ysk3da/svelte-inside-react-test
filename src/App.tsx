import React, { useLayoutEffect, useRef } from 'react';
import './App.css';
import Counter from "./Counter.svelte";
import Hello from "./Hello.svelte";
import useStore from "./store";

function App() {
  const { count, increment }= useStore();

  function SvelteWrapper(Component){
      const svelteRef = useRef<HTMLDivElement>(null);
      return (props) => {
        // このAppがマウントされた直後に呼び出される
        useLayoutEffect(()=>{
          // React.StrictModeでは 2回LayoutEffectが走る 最も簡単な方法はfistChildを確認して、あれば削除する方法
          while (svelteRef.current?.firstChild) {
            svelteRef.current?.firstChild?.remove();
          }
          if(svelteRef.current) {
            new Component({
              target: svelteRef.current,
              props
            })
          }
        }, [])
        return <div ref={svelteRef}></div>
      }
  }
  
  const SvelteHello = SvelteWrapper(Hello)
  const SvelteCounter = SvelteWrapper(Counter)
  
  return (
    <>
      <div>
        <SvelteHello
          extraText="Here is React!!!"
          onClick={increment}
         />
         <SvelteCounter/>
        <button className='btn btn-success' onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
