import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const{handleAddToCart,product}=props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h5 className='price'>Price: ${price}</h5>
                <p> Manufacturer : {seller}</p>
                <p >Rating : {ratings} star</p>
            </div>
            <button  onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;