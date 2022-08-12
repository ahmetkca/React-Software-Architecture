import { selector } from "recoil";
import { counterHistory } from "./counterHistory";

export const numberOfClickSelector = selector({
    key: "numberOfClickSelector",
    get: ({ get }) => {
        const clicksData = get(counterHistory);
        const totalClicks = clicksData.reduce((acc, curr) => acc + Number(curr.amount), 0);
        return totalClicks;
    }
});
