import { useRecoilValue } from "recoil";

import { counterState } from "../recoil-states";

export const DisplayCount = () => {
    const counter = useRecoilValue(counterState);
    return (
        <>
            <h4>Display Counter Component</h4>
            <p>You have clicked the button {counter} times.</p>
        </>
    );
}