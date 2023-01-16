import { CATEGORIES_TYPE } from "./categories.type";

const INITIAL_STATE = {
    categoriesArray: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_TYPE.SET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            }
        case CATEGORIES_TYPE.SET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                categoriesArray: payload,
            }
        }
        case CATEGORIES_TYPE.SET_CATEGORIES_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        default:
            return state
    }
}

