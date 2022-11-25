import "./shop.style.scss"
import CategoryProductPreview from "../category-product-preview/category-product-preview.component";
import Category from "../category/category.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
   return (
    <Routes>
        <Route index element={<CategoryProductPreview />}/>
        <Route path=":category" element={<Category />}/>
    </Routes>
   )
}

export default Shop;