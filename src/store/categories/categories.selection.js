import { createSelector } from "reselect";

const categoryReducer = (state) => { 
  return state.category
};

export const selectCategoriesMemo = createSelector(
  [categoryReducer],
  (categoryReducer) => {
    return categoryReducer.categoriesArray
  } 
)

export const selectCategories = createSelector(
  [selectCategoriesMemo], 
  (state) => {
    return state.reduce((acc, data) => {
          const {title, items} = data;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {}
        )
      }
  ) 

export const selectIsLoading = createSelector(
  [categoryReducer],
  (categoryReducer) => categoryReducer.isLoading,
)