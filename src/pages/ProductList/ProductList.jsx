import ProductBox from '../../components/ProductBox/ProductBox';
import './ProductList.css';
import ProductImage from '../../assets/p1.jpg'
import FilterProducts from '../../components/FilterProduct/FilterProducts';


function ProductList() {
    return (
        <div className='container' >
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>

                    {/* list of products */}
                    <FilterProducts />
                    <div className='product-list-box' id='productList'>
                        <ProductBox productImage={ProductImage} name={'dummy'} price={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductList;