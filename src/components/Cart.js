import React, { useState } from 'react'
import { motion } from "framer-motion"
import './css/cart.css'
import { BsCart, BsTrash2Fill } from 'react-icons/bs'
import CartCard from './CartCard'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'

function Cart(props) {
    const [updateCart, setUpdateCart] = useState();
    const [showAlert, setShowAlert] = useState(false);
    let counter = 0
    const navigate = useNavigate()
    const cartItems = props.cartItems
    function totalPrice(itemPrice, qty){
        counter = counter + itemPrice * qty
        props.setTotal(counter)
    }
    function emptyCart(){
        props.setCartItems([])
    }
    function removeItem(id){
        var newCartItems = cartItems
        var newId = +id
        newCartItems.splice(newId,1);
        props.setCartItems(newCartItems);
        setUpdateCart(Math.random());
        
    }
    function addQty(id) {
        const doesExist = props.cartItems.find((x) => x.id === id)
        if (doesExist){
            props.setCartItems(
                props.cartItems.map((x) =>
                    x.id === id ? {...doesExist, qty: doesExist.qty + 1}: x
                )
            );
        }
    }
    function lowerQty(id,index) {
        const doesExist = props.cartItems.find((x) => x.id === id)
        var newCartItems = cartItems
        console.log(index)
        if (doesExist.qty === 1){
            newCartItems.splice(index,1);
            props.setCartItems(newCartItems);
            setUpdateCart(Math.random());
        }
        if (doesExist){
            props.setCartItems(
                props.cartItems.map((x) =>
                    x.id === id ? {...doesExist, qty: doesExist.qty - 1}: x
                )
            );
        }
    }
    function checkoutAlert(){
        setShowAlert(true)
        navigate("/checkout")
        setTimeout(() => {setShowAlert(false)},1000)
    }
    
    
  return (
    
    <motion.div transition={{ type: "tween", duration: 1 }} animate={{x: "-70%"}}  className='cart-container'>
        {showAlert && <motion.div transition={{ type: "tween", duration: 1 }} animate={{x: "100%"}} className='cart-alert'><Alert variant="filled" severity="success">
  Going to Checkout!
</Alert></motion.div>}
        <div className='cart-header'>
            <h1>Cart</h1>
        </div>
        <div className='item-wrapper'>
        {props.cartItems.length === 0 && <div className='no-items'><h1>No items in cart</h1></div>}
        {cartItems.map((number, index) => {
              return (  
              <CartCard key={index} addQty={addQty} lowerQty={lowerQty} uid={number.id} id={index} qty={number.qty} removeItem={removeItem} name={number.name} image={number.image} price={number.price}>
                  {number.id}
                  {totalPrice(parseInt(number.price),parseInt(number.qty))}
              </CartCard>
              ) 
        })}
        </div>
            {counter !== 0  && <div><button id="empty-cart" onClick={emptyCart}>Empty Cart</button>
            <div className='cart-total'>
                <h1>Sub-Total:
                    <br/>{props.id}

                ${counter}
                </h1>
                
                <button className='checkout-button' onClick={() => {checkoutAlert()}}><BsCart id="checkout"/>Check Out</button>
            </div>
            </div>}
    </motion.div>
  )
}

export default Cart