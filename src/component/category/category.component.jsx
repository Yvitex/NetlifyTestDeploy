import { CategoryContainer, BackgroundImage, CategoryBodyContainer } from "./category.style";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({categories}) => {
    const {title, imageUrl, route} = categories;

    const navigate = useNavigate();

    const navigateTo = (route) => navigate(route);

    return (
        <CategoryContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer onClick={() => navigateTo(route)}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default CategoryItem;

