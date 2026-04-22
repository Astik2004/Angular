import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h2>Counter Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
