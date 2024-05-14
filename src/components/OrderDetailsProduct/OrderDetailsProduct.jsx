function OrderDetailsProduct([image, title , price, quantity]) {
    
    const quantityAvailable=[1,2,3,4,5,6,7,8,9,10]
    
    return (
        <div className="order-details-product d-flex flex-row">
            <div className="order-details-product-img d-flex">
                <img src={image} />
            </div>
            <div class="order-details-product-data d-flex flex-column">
                <div>
                    {title}
                </div>
                <div>&#8377; {price}</div>
            </div>
            <div className="order-details-product-actions d-flex flex-column">
                <div className="order-details-product-quantity">
                    < div className="fw-bold">Quantity</div>
                    <div class="form-group">
                        <select name="" id="" class="form-select">
                            {quantityAvailable.map((id)=> <option selected={quantity == id} value={id} key={id}>{id}</option>)}
                        </select>
                    </div>
                </div>
                <button className="order-details-product-remove btn btn-danger">Remove</button>
            </div>
        </div>
    )
}
export default OrderDetailsProduct;