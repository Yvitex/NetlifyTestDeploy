import "./category.style.scss"
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selection";
import { selectIsLoading } from "../../store/categories/categories.selection";
import Spinner from "../../component/spinner/spinner.component";

const Category = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        setProducts(categories[category]);
    }, [category, categories])

    return (
        <Fragment>
            <h2 className="title-category">{category.toUpperCase()}</h2>
            {isLoading ? <Spinner /> : (
                <div className="category-container-component">
                { products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
            )}
        </Fragment>
    )
}

export default Category;