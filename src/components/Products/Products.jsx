import products from "../productData"
import ProductItem from "./ProductItem";
import "./Products.css"

const Products = () => {
    const productList = products.map((product) => 

        <ProductItem product={product} key={product.id}/>

    );


    return (
        <main className='products-wrapper'>
            <ul className="products">{productList}</ul>
        </main>

    )
}

export default Products