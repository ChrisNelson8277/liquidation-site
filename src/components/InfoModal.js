import React from 'react'
import { GoX } from "react-icons/go";
import { IconContext } from 'react-icons/lib'

function infoModal(props) {
  return (
    <div className='modal-test'>
        <div className='modal-header'>
            <IconContext.Provider value={{
                className: "exit-icon"  
            }}>
            <button className='modal-exit'><GoX onClick={() => {props.openModal(false)}} /></button>
            </IconContext.Provider>
        </div>
        <div className='item-container'>
            <div className='item-name'>
            <h1>{props.name}</h1>
            </div>
            <br/>
            <div className='modal-item'>
                <img className='info-img' src={props.img} alt="liquidation"></img>
            </div>
            <div>
                <table className='item-table'>
                    <tbody className='item-table-body'>

                    <tr>
                <th scope='row'><h1>Price:</h1></th>
                <td>{props.price}</td>
                </tr>
                <tr>
                <th scope='row'><h1>Condition:</h1></th>
                <td>{props.condition}</td>
                </tr>
                <tr>
                <th scope="row"><h1>Category:</h1></th>
                <td>{props.category}</td>
                </tr>
                    </tbody>
                </table>
                <h1>Product Details:</h1>
                <div className='item-desc'>
                <p className='item-desc2'>{props.description}</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default infoModal