import "./shop.style.scss"
import CategoryProductPreview from "../category-product-preview/category-product-preview.component";
import Category from "../category/category.component";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { actionCategoriesStart } from "../../store/categories/categories.action";

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actionCategoriesStart());
    }, [dispatch])


    return (
    <Routes>
        <Route index element={<CategoryProductPreview />}/>
        <Route path=":category" element={<Category />}/>
    </Routes>
   )
}

export default Shop;