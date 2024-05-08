import axios from 'axios';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import './Home.css'
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../apis/fakeStoreProdApis';

function Home() {
    const [categories, setCategories] = useState(null)
    async function downloadCategories() {
        const response = await axios.get(getAllCategories());
        setCategories(response.data)
    }

    useEffect(() => {
        downloadCategories();
    }, [])

    return (
        <div class="container welcome-wrapper" style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <div class="row">
                <h2 class="home-title text-center">Welcome to Shop Cart</h2>
                <div class="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">

                    <CategoryItem itemName='All products' />

                    {categories && categories.map(category => <CategoryItem itemName={category} 
                    key={category} 
                    filter={category} />)}
                </div>
                <div class="category-title text-center">
                    Select a Category to Start Shopping
                </div>
            </div>
        </div>
    )

}

export default Home;