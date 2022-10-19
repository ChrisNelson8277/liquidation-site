import React from 'react'
import Card from './components/Card'
import { useEffect, useState } from 'react';
function Body(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);


  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false)
        setLoadedMeetups(products)
    });

}, []);

if (isLoading) {
  return (
      <section>
          <p>Loading...</p>
      </section>
  )
}

  return (
    <div className="bod-container" id="listings">
      <div className='bod-spacer'>

      {loadedMeetups.map(meetup => <Card cartItems={props.cartItems} setCartItems={props.setCartItems} key={meetup.id} id={meetup.id} image={meetup.image} name={meetup.title} description={meetup.description} price={meetup.price} condition={meetup.condition} category={meetup.category} />)}
      </div>
      </div>
  )
}

export default Body