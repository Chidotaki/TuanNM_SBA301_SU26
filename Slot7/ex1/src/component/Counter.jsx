import { useState } from "react";
import Button from "react-bootstrap/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
    return (<div>
        <h1>Counter: {count}</h1>
        <Button variant="primary" onClick={increment}>Increment</Button>{' '}
        <Button variant="secondary" onClick={decrement}>Decrement</Button>{' '}
        <Button variant="danger" onClick={reset}>Reset</Button>
    </div>);
}

export default Counter;