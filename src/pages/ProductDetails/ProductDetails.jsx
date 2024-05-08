import { useParams } from 'react-router';
import './ProductDetails.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getProductDetails } from '../../apis/fakeStoreProdApis';

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null)

    async function downloadProduct(id) {
        const response = await axios.get(getProductDetails(id))
        setProduct(response.data)
    }

    useEffect(() => {
        downloadProduct(id);
    }, [])

    return (
        product && 
            <div className="container" style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <div className="row">
                <div className="product-details-wrapper d-flex flex-row">
                    <div className="product-img d-flex" >
                        <img
                            src={product.image}
                            alt="product-image"
                            id="product-img" />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            {/* <!-- Product details --> */}
                            <div class="product-name" id="product-name">
                               {product.title}
                            </div>
                            <div className="product-price fw-bold" id="product-price"> {product.price}</div>
                            <div className="product-description" >
                                <div className="product-description-title fw-bold">{product.category}</div>
                                <div className="product-description-data" id="product-description-data">
                                    {product.description}
                                </div>
                            </div>


                        </div>

                        <div className="product-details-action btn btn-primary text-deccoration-none">Add to cart</div>
                        <a href="cart.html" id="goToCartBtn"
                            className="product-details-action btn btn-warning text-decoration-none">Go to cart</a>
                    </div>
                </div>
            </div>

        </div> 


    )
}
export default ProductDetails;