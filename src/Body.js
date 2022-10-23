import React from "react";
import Card from "./components/Card";
import { useEffect, useState } from "react";
function Body(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://luckyliquidations-41153-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];
        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
        }
        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="bod-container" id="listings">
      <div className="bod-spacer">
        {loadedProducts.map((product) => (
          <Card
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
            condition={product.condition}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
