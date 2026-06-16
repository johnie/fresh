import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="w-[200px] cursor-pointer rounded-[2em] border-2 border-transparent bg-[#446b9e]/10 px-[2em] py-[1em] text-[#335d92] tabular-nums outline-none focus:border-[#335d92] active:bg-[#446b9e]/20"
      onClick={() => setCount(count + 1)}
      type="button"
    >
      Clicks: {count}
    </button>
  );
}
