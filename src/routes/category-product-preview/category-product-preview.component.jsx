import CategoryPreview from "../../component/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selection";

const CategoryProductPreview = () => {
    const categories = useSelector(selectCategories)
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