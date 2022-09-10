const initialState = {
    showBanner: true
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type){
        case "TOGGLE_BANNER":
            return {
                showBanner: action.payload
            };
        default:
            return state;
    }
}

export default layoutReducer;