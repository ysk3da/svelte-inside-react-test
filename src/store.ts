import { readable } from "svelte/store";
import { create, } from "zustand";

interface Store {
  count: number
  increment: () => void
}

// こっちでreactへ渡す
const useStore = create<Store>((set)=>({
  count: 0,
  increment: () => set((state: { count: number; })=>({count: state.count +1}))
}))

// svelte のstore機能でグローバルステート
// こっちで.svelteに渡す
export const counter = readable(
  // 初期値をuseStoreから呼ぶ
  useStore.getState(),
  // 初期化関数をsetterから呼ぶ
  (set) => {
    const unsubscribe = useStore.subscribe(set);
    return () => unsubscribe();
  }
)

export default useStore