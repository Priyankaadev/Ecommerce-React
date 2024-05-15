import { useNavigate, useParams } from 'react-router';
import './ProductDetails.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { addProductToUserCart, getProductDetails } from '../../apis/fakeStoreProdApis';
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null)
    const {user} = useContext(UserContext)
    const {setCart} = useContext(CartContext)

   
    async function downloadProduct(id) {
        const response = await axios.get(getProductDetails(id))
        setProduct(response.data)
    }
    async function addProductToCart(){
     if(!user) return;
     const response = await axios.put(addProductToUserCart(),{userId:user.id, productId: id})
     setCart({...response.data}) 
     navigate(`/cart/${user.id}`);
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
                            <div className="product-name" id="product-name">
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

                        <div  onClick={addProductToCart} className="product-details-action btn btn-primary text-deccoration-none">Add to cart</div>
                        <a href="cart.html" id="goToCartBtn"
                            className="product-details-action btn btn-warning text-decoration-none">Go to cart</a>
                    </div>
                </div>
            </div>

        </div> 


    )
}
export default ProductDetails;