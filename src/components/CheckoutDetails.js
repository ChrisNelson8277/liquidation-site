import React from 'react'
import { Grid } from '@mui/material'
import CountrySelector from './CountrySelector'
import StateSelector from './StateSelector'
import { RiMastercardFill, RiVisaFill } from 'react-icons/ri'
import {SiAmericanexpress} from "react-icons/si"
import {FaCcDiscover} from 'react-icons/fa'
import { IconContext } from "react-icons";

const CheckoutDetails = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
            <div className='left-grid'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <h5>Email-Address</h5>
                    <input defaultValue="johnsmith414@gmail.com" disabled></input>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h3>Shipping Information</h3>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h5>Name or Company name</h5>
                    <input defaultValue="John Smith" disabled></input>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h5>Address</h5>
                    <input defaultValue="1234 Cherry Ln" disabled></input>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h5>City</h5>
                    <input defaultValue="Los Angeles" disabled></input>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h5>Apt #</h5>
                    <input placeholder='Apt, suite, etc..' defaultValue="" disabled></input>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h5>State</h5>
                    <StateSelector/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h5>Postal Code</h5>
                <input placeholder='90001' disabled></input>
                </Grid>
            </Grid>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className='right-grid'>
                <div className='right-grid-header'>
                <Grid xs={12} sm={12}>
                <h3>Payment Information</h3>
                </Grid>
                </div>
                <Grid xs={12} sm={12}>
                    <h5>Accepted Payments</h5>
                    <div className='cc-logos'>
                    <IconContext.Provider value={{size: "2rem"}}>
                <RiVisaFill/>
                <RiMastercardFill/>
                <SiAmericanexpress/>
                <FaCcDiscover/>
                </IconContext.Provider>
                    </div>
                </Grid>
                <Grid xs={12} sm={12}>
                    <h5>Name on Card</h5>
                    <input placeholder='John Smith' disabled></input>
                </Grid>
                <Grid xs={12} sm={12}>
                    <h5>Credit card number</h5>
                    <input placeholder='1111-2222-3333-4444' disabled></input>
                </Grid>
                <Grid xs={12} sm={12}>
                    <h5>Exp. Month</h5>
                    <select className='exp-month' disabled>
                        <option selected hidden>Select Exp Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </Grid>
                <Grid xs={12} sm={12}>
                    <h5>CVV</h5>
                    <input defaultValue="242" disabled></input>
                </Grid>
                <Grid xs={12} sm={12}>
                    <h5>Exp Year</h5>
                    <input placeholder="2026" disabled></input>
                </Grid>
            </div>
        </Grid>
    </Grid>
  )
}

export default CheckoutDetails