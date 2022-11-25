import { useContext } from "react";
import { CategoriesContext } from "../../context/products.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoryProductPreview = () => {
    const {categories} = useContext(CategoriesContext);
    return (
        <div>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </div>
    )
}

export default CategoryProductPreview;