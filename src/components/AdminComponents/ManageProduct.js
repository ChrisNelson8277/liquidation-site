import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { ItemContext }  from '../../contexts/AllItemsContext'
import AdminCard from './AdminCard'
import AdminTable from './AdminTable'
import EditListingModal from './EditListingModal'
function ManageProduct() {
    const data = ItemContext()
    const [itemInfo, setItemInfo] = useState()
    const [openModal, setOpenModal] = useState()
  return (
    <div className='manage'>
        {openModal === "true" &&<EditListingModal setUpdateAllItems={data.setUpdateAllItems} setOpenModal={setOpenModal} itemInfo={itemInfo}/>}
        <div className='manage-container' aria-label="Manage products">
          <AdminTable items={data} setOpenModal={setOpenModal} setItemInfo={setItemInfo}></AdminTable>
            {/* {test.allItems.map(meetup => 
        <AdminCard setOpenModal={setOpenModal}setItemInfo={setItemInfo} key={meetup.id} id={meetup.id} image={meetup.image} name={meetup.title} description={meetup.description} price={meetup.price} condition={meetup.condition} category={meetup.category} />)} */}
        </div>
    </div>
  )
}

export default ManageProduct