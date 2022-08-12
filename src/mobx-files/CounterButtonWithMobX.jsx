import { useRef } from "react";
import { observer } from "mobx-react";

export const CounterButtonWithMobX = observer(({ counter }) => {

    const incrementByInput = useRef(null);

    return (
        <>
            <p>You have clicked the button {counter.numberOfClicks} times.</p>
            <button onClick={() => counter.increment(Number(incrementByInput.current.value))}>
                Increment
            </button>
            <label>
                Increment by:
                <input type="number" defaultValue={1} ref={incrementByInput} />
            </label>
        </>
    );
})