import React from 'react'
import { Table } from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CheckoutTable = (props) => {
  return (
    <div className='checkout-table-wrapper'>
    <div className='checkout-table-container'>
    <TableContainer component={Paper}>
    <Table className='checkout-table' aria-label="simple table">
      <TableHead className='checkout-table-head'>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">SubTotal</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.cartItems.map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {product.name}
            </TableCell>
            <TableCell align="right">{product.qty}</TableCell>
            <TableCell align="right">{product.price}</TableCell>
            <TableCell align="right">${parseInt(product.price) * product.qty}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </div>
  )
}

export default CheckoutTable