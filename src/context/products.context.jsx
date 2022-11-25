import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await getCollectionAndDocuments();
            setCategories(data);
        }
        getData();
    }, [])

    const value = {categories, setCategories};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}