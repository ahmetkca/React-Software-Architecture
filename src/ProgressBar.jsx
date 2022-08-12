import { useContext } from "react"
import { CounterContext } from "./CounterContext"


export const ProgressBar = () => {

    const { counter, maxProgress, onChangeMaxProgress } = useContext(CounterContext);


    return (
        <>
            <progress value={counter} max={maxProgress}></progress>
            <div>
                <label>
                    Max progress:
                    <input type="number" value={maxProgress} onChange={onChangeMaxProgress} />
                </label>
            </div>
        </>
    )
}

export default ProgressBar;

