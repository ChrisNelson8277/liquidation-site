import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext();
export function ItemContext() {
    return useContext(Context)
}
const AllItemsContext = ({children}) => {
    const [allItems, setAllItems] = useState([])
    const [updateAllItems, setUpdateAllItems] = useState(0)
    useEffect(() => {
        fetch('https://luckyliquidations-41153-default-rtdb.firebaseio.com/products.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const products = [];
            for (const key in data) {
                const product = {
                    id: key,
                    ...data[key]
                };
                products.push(product)
            }
            setAllItems(products)
        });
    }, [updateAllItems]);
    
  return (
    <Context.Provider value={{allItems,setUpdateAllItems}}>
        {children}
    </Context.Provider>
  )
}

export default AllItemsContext
