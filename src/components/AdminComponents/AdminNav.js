import React, { useState } from 'react'
import '../css/adminpanel.css'
import { useNavigate } from 'react-router-dom'


function AdminNav(props) {
    let navigate = useNavigate();
   function navigateHome() {
        navigate('/');
   }
  return (


    <nav className='nav-container'>
        <div className='admin-title'> Admin Panel</div>
        <div>
        <ul>
            <li onClick={() => {props.page("addproduct")}}>Add</li>
            <li onClick={() => {props.page("manageproduct")}}>Manage</li>
            <li onClick={navigateHome}>Home</li>
        </ul>
        </div>
    </nav>

  )
}

export default AdminNav