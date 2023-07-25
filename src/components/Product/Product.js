import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h5 className='price'>Price: ${price}</h5>
                <p> Manufacturer : {seller}</p>
                <p >Rating : {ratings} star</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;