export const incrementButtonClicked = (amount = 1) =>  ({
    type: 'INCREMENT_BUTTON_CLICKED',
    payload: {
        amount
    }
});

export const decrementButtonClicked = (amount = 1) => ({
    type: 'DECREMENT_BUTTON_CLICKED',
    payload: {
        amount
    }
});

export const resetButtonClicked = {
    type: 'RESET_BUTTON_CLICKED',
    payload: {
        amount: 0
    }
}
