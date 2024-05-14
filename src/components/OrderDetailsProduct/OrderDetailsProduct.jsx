function OrderDetailsProduct() {
    return (
        <div className="order-details-product d-flex flex-row">
            <div className="order-details-product-img d-flex">
                <img src="" />
            </div>
            <div class="order-details-product-data d-flex flex-column">
                <div>
                    Some Product
                </div>
                <div>&#8377; 1000</div>
            </div>
            <div className="order-details-product-actions d-flex flex-column">
                <div className="order-details-product-quantity">
                    < div className="fw-bold">Quantity</div>
                    <div class="form-group">
                        <select name="" id="" class="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <button className="order-details-product-remove btn btn-danger">Remove</button>
            </div>
        </div>
    )
}
export default OrderDetailsProduct;