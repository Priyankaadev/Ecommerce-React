import { Link } from "react-router-dom";

function CategoryItem({itemName}) {
    return (

        <div class="category-item d-flex justify-content-center align-items-center">
            <Link to="/products">{itemName}</Link>
        </div>
    )
}

export default CategoryItem;