import React, { useState } from 'react'
import './css/cartcard.css'
import { BsTrash2Fill } from 'react-icons/bs'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const CartCard = (props) => {
    const [input, setInput ] = useState();
    const handleChange = event => {
        setInput(parseInt(event.target.value) + 1)
    }
  return (
    <div className="cart-card-container" key={props.id}>
                
        <div className='cart-card-img'>
            <img src={props.image} alt="cart product image"></img>
        </div>
        <div className='card-text'>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <h3>
                    {props.price}
                    </h3>
            </div>
            <div className='bottom-card'>
                <div className='qty-selector'>
                    Quantity <AiFillMinusCircle onClick={() => {props.lowerQty(props.uid, props.id)}}/><input value={props.qty} type="number" readOnly></input><AiFillPlusCircle onClick={() => {props.addQty(props.uid)}}/>
                </div>
                <div className='remove-button'>
                    <button onClick={() => {props.removeItem(props.id)}}>
                        <BsTrash2Fill className='delete-icon' />Remove
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard