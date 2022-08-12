export const numberOfClickReducer = (state = 0, action) => {
    const { type } = action;
    console.log(action)
    switch (type) {
        case 'INCREMENT_BUTTON_CLICKED':
            return state + action.payload.amount;
        case 'DECREMENT_BUTTON_CLICKED':
            return state - action.payload.amount;
        case 'RESET_BUTTON_CLICKED':
            return action.payload.amount;
        default:
            return state;
    }
}
