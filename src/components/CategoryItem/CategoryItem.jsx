import { Link } from "react-router-dom";

function CategoryItem({itemName, filter=''}) {
   const redirectLink = `/products?category=${filter}`
    return (
        <div class="category-item d-flex justify-content-center align-items-center">
            <Link to={redirectLink}>{itemName}</Link>
        </div>
    )
}

export default CategoryItem;