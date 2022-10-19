import React, { useState } from 'react'
import './css/addproduct.css'
import { useRef } from 'react';
import { ItemContext } from '../contexts/AllItemsContext';


function AddProduct(props) {
    const [state, setState] =useState()
    var update = ItemContext()
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const conditionInputRef = useRef();
    const categoryInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCondition = conditionInputRef.current.value
        const enteredPrice = priceInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const newProductData = {
            title: enteredTitle,
            image: enteredImage,
            price: enteredPrice,
            category: enteredCategory,
            condition: enteredCondition,
            description: enteredDescription,
        };
    addProductHandler(newProductData);
    
    }

    function addProductHandler(data) {
    fetch(
        'https://luckyliquidations-41153-default-rtdb.firebaseio.com/products.json',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        ).then(() => {
            update.setUpdateAllItems(Math.random())

            nameInputRef.current.value = "";
            imageInputRef.current.value = "";
            conditionInputRef.current.value= "";
            priceInputRef.current.value= "";
            categoryInputRef.current.value= "";
            descriptionInputRef.current.value= "";
        }
            
            );
    }
  return (
    <div className='addProductContainer'>
        <div className='add-product-header'>
            <h3>Add a product</h3>
            </div>
            
        <div className='addProductCard'>
            <form onSubmit={submitHandler}>
                <div>
                <label for="item-name">Product Name:</label>
                <input type="text" id="item-name" name="item-name" ref={nameInputRef} required></input>
                </div>
                <div>
                <label for="item-price">Price:</label>
                <input type="text" id="item-price" name="item-price" ref={priceInputRef} required></input>
                </div>
                <div>
                <label for="item-condition">Condition:</label>
                <input type="text" id="item-condition" name="item-condition" ref={conditionInputRef} required></input>
                </div>
                <div>
                <label for="item-category">Category:</label>
                <input type="text" id="item-category" name="item-category" ref={categoryInputRef} required></input>
                </div>
                <div>
                    <label for="item-image">Product Image URL:</label>
                    <input type="url" id="item-image" name="item-image" ref={imageInputRef} required></input>
                </div>
                <div className='add-item-description'>
                    <p>Description:</p>
                    <textarea cols="30" rows="10" ref={descriptionInputRef} required></textarea>
                </div>
                <div className='product-submit'>
                <input  type="submit" ></input>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProduct