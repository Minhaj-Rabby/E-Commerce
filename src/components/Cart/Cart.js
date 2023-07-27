import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteShoppingCart,removeFromDb } from '../../utilities/fakedb';
const Cart = ({cart}) => {
    let total=0;
    let shipping=0;
    for (const product of cart){
        total=product.price+total;
        shipping=product.shipping+shipping;
    }

    const tax=total*.1;
    const grandTotal =tax+total+shipping;

    const removeDb=()=>{
        deleteShoppingCart();
    }
    return (
        <div className='cart'>
        
            <h5>Order Summery</h5>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button onClick={()=>removeDb()} className='clear-btn-cart'>
                <h4>Clear Cart</h4>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            <button className='review-btn-cart'>
                <h4>Review Order</h4>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Cart;