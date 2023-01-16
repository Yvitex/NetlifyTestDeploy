import { all, call, put, takeLatest } from "redux-saga/effects";
import { actionCategoriesSuccess, actionCategoriesFailed } from "./categories.action";
import { CATEGORIES_TYPE } from "./categories.type";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";


// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(actionCategoriesStart());
//    try {
//         const data = await getCollectionAndDocuments();
//         dispatch(actionCategoriesSuccess(data));
    
//    } catch (error) {
//         dispatch(actionCategoriesFailed(error));
//    }
// }

export function* fetchCategoriesAsync() {
    try {
        const data = yield call(getCollectionAndDocuments, "categories");
        yield put(actionCategoriesSuccess(data));
    
   } catch (error) {
        yield put(actionCategoriesFailed(error));
   }
}

export function* onCategoriesFetch() {
    yield takeLatest(CATEGORIES_TYPE.SET_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onCategoriesFetch)]);
}

