import { useContext, useState } from "react";
import { CounterContext } from "./CounterContext";
import ProgressBar from "./ProgressBar";

export const CounterButtonWithContext = () => {

    const { counter, increment, decrement, reset, incrementBy, decrementBy } = useContext(CounterContext);
    const [incrementAmount, setIncrementAmount] = useState(1);
    const [decrementAmount, setDecrementAmount] = useState(1);

    return (
        <>
            <p>You have clicked the button {counter} times.</p>
            <button onClick={() => increment()}>
                Increment
            </button>
            <button onClick={() => decrement()}>
                Decrement
            </button>
            <button onClick={() => reset()}>
                Reset
            </button>
            <div style={ { flex: 1, margin: '2px', padding: '2px', }}>
                <label style={{ flex: 2, padding: '2px'}}>
                    <button onClick={() => incrementBy(incrementAmount)} style={{ flex: 1 }}>
                        Increment by
                    </button>
                    <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(parseInt(e.target.value))} />
                </label>
            </div>
            <div style={ { flex: 1, margin: '2px', padding: '2px', }}>
                <label style={{ flex: 2, padding: '2px'}}>
                    <button onClick={() => decrementBy(decrementAmount)} style={{ flex: 1 }}>
                        Decrement by
                    </button>
                    <input type="number" value={decrementAmount} onChange={(e) => setDecrementAmount(parseInt(e.target.value))} />
                </label>
            </div>
            <ProgressBar />
        </>
    );
}

export default CounterButtonWithContext;