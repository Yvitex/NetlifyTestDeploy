import "./category.style.scss"
import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/products.context";
import ProductCard from "../../component/product-card/product-card.component";

const Category = () => {
    const {category} = useParams();
    const {categories} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [category, categories])


    return (
        <Fragment>
            <h2 className="title-category">{category.toUpperCase()}</h2>
            <div className="category-container-component">
                { products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </Fragment>
    )
}

export default Category;