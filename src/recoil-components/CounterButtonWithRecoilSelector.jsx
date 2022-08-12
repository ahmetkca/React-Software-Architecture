import { useRecoilState, useRecoilValue } from 'recoil';
import { counterHistory, incrementByState } from '../recoil-states';
import { numberOfClickSelector } from '../recoil-states';

export const CounterButton = () => {

    const numberOfClicks = useRecoilValue(numberOfClickSelector);

    const [clicksData , setClicksData] = useRecoilState(counterHistory);


    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <h4>Processing counterHistory Recoil 'atom' to calculate number of clicks by using Recoil 'selector'</h4>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <button onClick={() => {
                setClicksData([...clicksData, { timestamp: Date.now(), amount: incrementBy }]);
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