import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} = props || {};
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
            <h1 className="text-center"><i class="fas fa-shopping-bag "></i> {cart.length}</h1>
            <h4 className="mt-3 text-center border border-dark border-3 p-2 me-4">Total Price: ${total.toFixed(2)}</h4>
            <ol>
                {
                    cart.map(course => <li className="fw-bold text-danger" >{course.name}</li> )
                }
            </ol>
        </div>
    );
};

export default Cart;