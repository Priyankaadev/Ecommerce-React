import CategoryItem from '../../components/CategoryItem/CategoryItem';
import './Home.css'

function Home() {
    return (
        <div class="container">
            <div class="row">
                <h2 class="home-title text-center">Welcome to Shop Cart</h2>
                <div class="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">

                    <CategoryItem itemName='All products' />


                </div>
                <div class="category-title text-center">
                    Select a Category to Start Shopping
                </div>
            </div>
        </div>
    )

}

export default Home;