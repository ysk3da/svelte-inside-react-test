import { useEffect, useRef, useState } from 'react';
import './App.css';
import Hello from "./Hello.svelte";

// ここで、汎用化を考えましょう。
export const SvelteWrapper = (props = {}) => {
  const svelteRef = useRef<HTMLDivElement>(null);
  const helloCompRef = useRef<Hello | null>(null);

  // このAppがマウントされた直後に呼び出される
  useEffect(() => {
    // React.StrictModeでは 2回LayoutEffectが走る 最も簡単な方法はfistChildを確認して、あれば削除する方法
    // while (svelteRef.current?.firstChild) {
    //   svelteRef.current?.firstChild?.remove();
    // }
    if (svelteRef.current) {
      helloCompRef.current = new Hello({
        target: svelteRef.current,
        props,
      })
    }
    return () => {
      if (helloCompRef.current) {
        helloCompRef.current.destroy();
      }
    };
  },[props]);
  return <div ref={svelteRef}></div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SvelteWrapper/>
        <button className='btn btn-success' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
