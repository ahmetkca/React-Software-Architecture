import { useRef } from "react";
import { useState } from "react";

export const CounterButton = () => {

    const [counter, setCounter] = useState(0);

    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <p>You have clicked the button {counter} times.</p>
            <button onClick={() => setCounter(counter + incrementBy)}>
                Click
            </button>
            <label>
                Increment by:
                <input type="number" value={incrementBy} onChange={(e) => setIncrementBy(parseInt(e.target.value))} />
            </label>
        </>
    );

}
export default CounterButton;