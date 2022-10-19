import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const AdminTable = (props) => {
  return (
    <Table >
            <TableHead>
              <TableRow sx={{backgroundColor: "rgb(124, 202, 241)"}}>
                <TableCell>Product</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{backgroundColor: "white"}}>
            {props.items.allItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center"><Button variant="contained" onClick={() => {props.setOpenModal("true");props.setItemInfo(row);}}>Edit</Button></TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
  )
}

export default AdminTable