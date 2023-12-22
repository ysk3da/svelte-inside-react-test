
/* eslint-disable react/display-name */
import React, { useLayoutEffect, useRef } from 'react';
export function SvelteWrapper(Component){
  const svelteRef = useRef<HTMLDivElement>(null);
  return (props: unknown) => {
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