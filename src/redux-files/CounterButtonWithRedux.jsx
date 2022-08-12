import { useSelector, useDispatch } from 'react-redux';
import { decrementButtonClicked, incrementButtonClicked, resetButtonClicked } from './actions';
import { getNumberOfClicks } from './selectors';
import { useRef } from 'react';
import { useEffect } from 'react';

export const CounterButtonWithRedux = () => {
    const dispatch = useDispatch();
    const numberOfClicks = useSelector(getNumberOfClicks);

    const incrementByInput = useRef(null);

    const increment = (amount) => {
        dispatch(incrementButtonClicked(amount));
    }

    const decrement = (amount) => {
        dispatch(decrementButtonClicked(amount));
    }
    const reset = () => {
        dispatch(resetButtonClicked);
    }


    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <button onClick={() => increment(Number(incrementByInput.current.value))}>
                Increment
            </button>
            <button onClick={() => decrement(Number(incrementByInput.current.value))}>
                Decrement
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <div>
                <label>
                    Increment by:
                    <input type="number" defaultValue={1} ref={incrementByInput} />
                </label>
            </div>
        </>
    );
}

export default CounterButtonWithRedux;