import React from 'react'
import { GoX } from "react-icons/go";
import { IconContext } from 'react-icons/lib'


function EditListingModal(props) {
    console.log(props)
    function deleteUser(id){
        fetch(`https://luckyliquidations-41153-default-rtdb.firebaseio.com/products/${id}.json`,{
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                props.setOpenModal(false)
            })
        })
    }
    function updateItem(e,id) {
        e.preventDefault();
        console.log(id, e.target.category.value)
        const itemData = {
            category: e.target.category.value,
            condition: e.target.condition.value,
            description: e.target.condition.value,
            image: e.target.image.value,
            price: e.target.price.value,
            title: e.target.name.value
        }
        console.log(itemData)
        fetch(`https://luckyliquidations-41153-default-rtdb.firebaseio.com/products/${id}.json`,{
            method: "PUT",
            body: JSON.stringify(itemData)
        }).then((result) => {
            return result.json();
        }).then((resp) => {
            props.setUpdateAllItems(Math.random())
            props.setOpenModal(false)
        })
    }
  return (
    <div className='modal-edit'>
        <div className='edit-header'>
            <IconContext.Provider value={{
                className: "exit-icon"  
            }}>
            <button className='modal-exit'><GoX onClick={() => {props.setOpenModal(false)}} /></button>
            </IconContext.Provider>
        </div>
        <div className='item-container'>
            <div className='item-name'>
            <h1>{props.itemInfo.name}</h1>
            </div>
            <br/>
            <div className='modal-item'>
                <img className='info-img' src={props.itemInfo.image} alt="liquidation"></img>
            </div>
            <div>
                <form className='admin-form' onSubmit={(e) => {updateItem(e,props.itemInfo.id)}}>
                <label htmlFor="name">Name:</label>
                <br/>
                <input type="text" id="name" name="name" defaultValue={props.itemInfo.title}/>
                <br/>
                <label htmlFor="price">Price:</label>
                <br/>
                <input type="text" id="price" name="price" defaultValue={props.itemInfo.price}/>
                <br/>
                <label htmlFor="condition">Condition:</label>
                <br/>
                <input type="text" id="condition" name="condition" defaultValue={props.itemInfo.condition}/>
                <br/>
                <label htmlFor="category">Category:</label>
                <br/>
                <input type="text" id="category" name="category" defaultValue={props.itemInfo.category}/>
                <br/>
                <label htmlFor="image">Image Link:</label>
                <br/>
                <input type="text" id="image" name="image" defaultValue={props.itemInfo.image}/>
                <br/>
                <label htmlFor="description">Description:</label>
                <br/>
                <div className='description'>

                <textarea id="description" name="description" defaultValue={props.itemInfo.description}/>
                </div>
                <input type="submit" value="Update Item"/>
                
                </form>
                <button className='delete-button' onClick={() => {deleteUser(props.itemInfo.id)}}>DELETE</button>
            </div>
        </div>
    </div>
  )
}

export default EditListingModal