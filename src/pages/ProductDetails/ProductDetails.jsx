import './ProductDetails.css'

function ProductDetails() {
    return (
        <div className="container" style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <div className="row">
                <div className="product-details-wrapper d-flex flex-row">
                    <div className="product-img d-flex" >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8HfYo7WbGACmSdpGYM4CbDgoz7LdpdINS0AN3pZ0_iMX7tRgZs9Ztyizo-yGfc5yCjt6ZVA78O7G4sCGOgo66Y3ZD7YPiV1F0gQkt--3lAY6RTnPB-h4y"
                            alt="product-image"
                            id="product-img" />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            {/* <!-- Product details --> */}
                            <div class="product-name" id="product-name">
                                bag
                            </div>
                            <div className="product-price fw-bold" id="product-price"> 5555</div>
                            <div className="product-description" >
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">
                                    kjhghh
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