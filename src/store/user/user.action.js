import { dispatchHelper  } from "../../utils/reducer/reducer.utils";
import { USER_TYPE_SELECTION } from "./user.type";

/*
    CHECK_USER_SESSION: "CHECK_USER_SESSION",
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE"
*/

export const setCurrentUser = (user) => {
    return dispatchHelper(USER_TYPE_SELECTION.SET_CURRENT_USER, user);
}

export const checkUserSession = () => dispatchHelper(USER_TYPE_SELECTION.CHECK_USER_SESSION);
export const googleSigninStart = () => dispatchHelper(USER_TYPE_SELECTION.GOOGLE_SIGN_IN_START);
export const emailSigninStart = (email, password) => dispatchHelper(USER_TYPE_SELECTION.EMAIL_SIGN_IN_START, {email, password});
export const signInSuccess = (user) => dispatchHelper(USER_TYPE_SELECTION.SIGN_IN_SUCCESS, user);
export const signInFailure = (error) => dispatchHelper(USER_TYPE_SELECTION.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) => dispatchHelper(USER_TYPE_SELECTION.SIGN_UP_START, {email, password, displayName});
export const signUpSuccess = (user, additionalDetail) => dispatchHelper(USER_TYPE_SELECTION.SIGN_UP_SUCCESS, {user, additionalDetail});
export const signUpFailure = (error) => dispatchHelper(USER_TYPE_SELECTION.SIGN_UP_FAILURE, error);

export const signOutStart = () => dispatchHelper(USER_TYPE_SELECTION.SIGN_OUT_START);
export const signOutSuccess = () => dispatchHelper(USER_TYPE_SELECTION.SIGN_OUT_SUCCESS);
export const signOutFailure = (error) => dispatchHelper(USER_TYPE_SELECTION.SIGN_OUT_FAILURE, error);