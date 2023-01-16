import { USER_TYPE_SELECTION } from "./user.type";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_TYPE_SELECTION.SIGN_IN_SUCCESS: 
            return {
                ...state, 
                currentUser: payload
            }
        case USER_TYPE_SELECTION.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case USER_TYPE_SELECTION.SIGN_IN_FAILURE:
        case USER_TYPE_SELECTION.SIGN_UP_FAILURE:
        case USER_TYPE_SELECTION.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: payload
            }
        default: 
            return state
    }
}