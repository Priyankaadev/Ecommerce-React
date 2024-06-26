import ProductBox from '../../components/ProductBox/ProductBox';
import './ProductList.css';
import FilterProducts from '../../components/FilterProduct/FilterProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts, getAllProductsByCategory } from '../../apis/fakeStoreProdApis';


function ProductList() {
    const [productList, setProductList] = useState(null);
   const [query] = useSearchParams();
   
    async function downloadProductList(category) {
        const downloadUrl = category ? getAllProductsByCategory(category) : getAllProducts();
        const response = await axios.get(downloadUrl)
        setProductList(response.data)
    }

    useEffect(() => {
        downloadProductList(query.get('category'));
    }, [query.get('category')]);

    return (
        <div className='container' style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>

                    {/* list of products */}
                    <FilterProducts />
                    <div className='product-list-box' id='productList'>
                        {/* <ProductBox productImage={ProductImage} name={'dummy'} price={1000} /> */}
                        {productList && productList.map(products => <ProductBox productImage={products.image}
                            name={products.title.substring(0, 12) + "...."}
                            price={products.price}
                            productId= {products.id}
                            key={products.id} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductList;