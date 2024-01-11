"use client";

import Link from "next/link";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click to Increase</button>
      <Link href={"/en/product"} className="text-red-400 hover:underline">
        Product
      </Link>
    </div>
  );
}
