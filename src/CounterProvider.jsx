import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
    const [maxProgress, setMaxProgress] = useState(1000);

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }

    const incrementBy = (amount) => {
        setCounter(counter + amount);
    }
    const decrementBy = (amount) => {
        setCounter(counter - amount);
    }

    const onChangeMaxProgress = (e) => {
        setMaxProgress(parseInt(e.target.value));
    }
    

    return (
        <CounterContext.Provider value={{ counter, increment, decrement, reset, incrementBy, decrementBy, maxProgress, onChangeMaxProgress }}>
            {children}
        </CounterContext.Provider>
    )
}