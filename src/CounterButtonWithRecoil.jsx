import { useRecoilState } from 'recoil';
import { counterState, incrementByState } from './recoil-states';

export const CounterButton = () => {

    const [counter, setCounter] = useRecoilState(counterState);


    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <p>You have clicked the button {counter} times.</p>
            <button onClick={() => {
                setCounter(counter + incrementBy);
            }}>
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