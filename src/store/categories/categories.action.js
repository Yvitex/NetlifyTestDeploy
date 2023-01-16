import { dispatchHelper  } from "../../utils/reducer/reducer.utils";
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

export const actionCategoriesStart = () => dispatchHelper(CATEGORIES_TYPE.SET_CATEGORIES_START);

export const actionCategoriesSuccess = (result) => dispatchHelper(CATEGORIES_TYPE.SET_CATEGORIES_SUCCESS, result);

export const actionCategoriesFailed = (error) => dispatchHelper(CATEGORIES_TYPE.SET_CATEGORIES_FAILED, error);

