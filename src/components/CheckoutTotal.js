import React from 'react'
import { Grid } from '@mui/material'
const CheckoutTotal = (props) => {
    const taxTotal = props.cartTotal * .06
  return (
    <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>

                </Grid>
                <Grid item xs={6} sm={6}>
                    <div className='total-price-container'>
                        <div>
                            Subtotal: ${props.cartTotal}
                        </div>
                        <div>
                        Tax: ${taxTotal}
                        </div>
                        <div>
                        Total Price: ${props.cartTotal + taxTotal}
                        </div>
                    </div>
                    <div>
                    </div>
                </Grid>
            </Grid>
  )
}

export default CheckoutTotal