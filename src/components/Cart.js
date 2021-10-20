import { CartState } from "./ProductContext";
import React from 'react';
import "./Cart.css";
import {useHistory } from "react-router";

const Store=()=>{
    const {state:{cart}}=CartState();
    const history=useHistory();

    const redirect=()=>{
        history.push("/checkout")
    }

    let totalPrice=0;
    totalPrice=cart.reduce((total,b)=>total+parseInt(b.price),0)
    
    return(
        <div>
        <div className="cart">
            <div className="cart-container">
                <div className="cart-header">
                    <h3>Shopping Cart</h3>
                    <h5>Remove all</h5>
                </div>
            
                {cart.length>0?cart.map(key=><div className="cart-content">
                    <div className="cart-image">
                <img src={key.image} style={{height:"100px" }} alt="" />
                </div>
                <div className="description">{key.name}</div>
                <div>QTY</div>
                <div>{key.price}</div>
                </div>): <h4 className="empty">Cart is empty</h4>}
                
            </div>
           
        </div>
         <div className="total">
         Total Price: {totalPrice}</div>
         <div className="total"> <button onClick={redirect}>Checkout</button></div>
         </div>
    )
}

export default Store;