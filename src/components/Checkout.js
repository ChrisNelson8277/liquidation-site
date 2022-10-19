import { Button, Grid } from '@mui/material'
import React from 'react'
import CheckoutDetails from './CheckoutDetails'
import CheckoutNav from './CheckoutNav'
import CheckoutTable from './CheckoutTable'
import CheckoutTotal from './CheckoutTotal'
import './css/checkout.css'


const Checkout = (props) => {
    
  return (
    <div className='checkout'>
        <CheckoutNav/>
        <div className='checkout2'>
            <CheckoutTable cartItems={props.cartItems}/>
            <CheckoutTotal cartTotal={props.cartTotal}></CheckoutTotal>
            <CheckoutDetails/>
            <div className='pay-button'>
            <Button variant='contained'>Complete Payment</Button>
            </div>
        </div>
    </div>
  )
}

export default Checkout