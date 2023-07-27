import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import {addToDb, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
const[cart ,setCart]=useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect(()=>{
        const storedCart =getShoppingCart();
        for (const id in storedCart){
        const addedProduct=products.find(product=>product.id===id)
        console.log(addedProduct);
        }
    },[])
    const handleAddToCart = (product) => {
        console.log(cart);
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.id);
    }

    return (

        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;