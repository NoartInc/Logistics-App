const initialState = {
    user: null,
    isLogin: false,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLogin: true
            };
        case "authLogout":
            return {
                ...state,
                ...initialState
            }          
        
        default:
      return state;
    }
}

export default authReducer;