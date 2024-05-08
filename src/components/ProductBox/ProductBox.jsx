import { Link } from 'react-router-dom';
import './ProductBox.css'
function ProductBox({ productImage, name, price , id}) {

    return (
        <Link to={`/products/${id}`}
            href="productDetails.html"
            className="product-item text-decoration-none d-inline-block">
            <div className="product-img">
                <img src={productImage} />
            </div>
            <div className="product-name text-center">{name}</div>
            <div className="product-price text-center">&#8377; {price}</div>
        </Link>

    )
}
export default ProductBox;