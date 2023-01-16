import {takeLatest, all, call, put, take} from "redux-saga/effects";
import { USER_TYPE_SELECTION } from "./user.type";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpStart, signUpSuccess } from "./user.action";
import { 
    getCurrentUser, 
    createUserDocumentFromAuth, 
    signInWithGoogle,
    signInWithEmail,
    createWithEmailAndPassword,
    signOutUser
} from "../../utils/firebase/firebase.utils";
import { signOut } from "firebase/auth";



export function* getSnapshotFromUserAuth(userAuth, additionalArgument) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalArgument);
        const id = userSnapshot.id;
        const data = userSnapshot.data();
        yield put(signInSuccess({id: id, ...data}));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* googleSignIn() {
    try {
        const {user} = yield call(signInWithGoogle);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* emailSignin({payload: {email, password}}) {
    try {
        const { user } = yield call(signInWithEmail, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield call(createWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user, {displayName}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetail}}) {
    try {
        yield call(getSnapshotFromUserAuth, user, additionalDetail);
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signOutUserData() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_TYPE_SELECTION.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSigninStart() {
    yield takeLatest(USER_TYPE_SELECTION.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onSigninWithEmail() {
    yield takeLatest(USER_TYPE_SELECTION.EMAIL_SIGN_IN_START, emailSignin);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_TYPE_SELECTION.SIGN_IN_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
    yield takeLatest(USER_TYPE_SELECTION.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_TYPE_SELECTION.SIGN_OUT_START, signOutUserData);
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSigninStart), 
        call(onSigninWithEmail),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    ]);
}