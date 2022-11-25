import CategoryContainer from "../../component/category-container/category-container.component";
import { Outlet } from "react-router-dom";

const Home = () => {

  

  return (
    <div>
        <Outlet />
        <CategoryContainer />
    </div>
  )
}

export default Home;
