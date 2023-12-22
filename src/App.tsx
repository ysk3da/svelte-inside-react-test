import React, { useLayoutEffect, useRef } from 'react';
import './App.css';
import Hello from "./Hello.svelte";
import useStore from "./store";

function App() {
  const { count, increment }= useStore();

  const svelteRef = useRef<HTMLDivElement>(null);
  
  // このAppがマウントされた直後に呼び出される
  useLayoutEffect(()=>{
    // React.StrictModeでは 2回LayoutEffectが走る 最も簡単な方法はfistChildを確認して、あれば削除する方法
    while (svelteRef.current?.firstChild) {
      svelteRef.current?.firstChild?.remove();
    }
    if(svelteRef.current) {
      new Hello({
        target: svelteRef.current,
        props: {
          extraText: "here is React",
          onClick: increment
        }
      })
    }
  }, [])
  
  
  return (
    <>
      <div>
        <div ref={svelteRef}></div>
        <button className='btn btn-success' onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
