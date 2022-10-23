import React from "react";
import "./css/card.css";
import { useState } from "react";
import InfoModal from "./InfoModal";
import ContactModal from "./ContactModal";
import ImageSlider from "./ImageSlider";

function Card(props) {
  const [openModal, setOpenModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState();
  const slides = [
    { url: props.image, title: "Picture" },
    {
      url: "https://randomwordgenerator.com/img/picture-generator/57e4d74a4853aa14f1dc8460962e33791c3ad6e04e507440752f72d69f44c2_640.jpg",
    },
  ];
  const handleClick = (e) => {
    setOpenModal(true);
  };
  function addItemsToCart(id, name, image, price, qty) {
    const newItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      qty: 1,
    };
    const doesExist = props.cartItems.find((x) => x.id === newItem.id);
    if (doesExist) {
      props.setCartItems(
        props.cartItems.map((x) =>
          x.id === newItem.id ? { ...doesExist, qty: doesExist.qty + 1 } : x
        )
      );
    } else props.setCartItems([...props.cartItems, newItem]);
  }

  return (
    <div className="card-container">
      <h1 className="card-h1">{props.name}</h1>

      <div className="image-slider">
        <ImageSlider slides={slides} />
        {/* <img className="card-image" src={props.image} alt="pallet"></img> */}
      </div>
      <div className="btn-grid">
        <div className="btn-2">
          <button
            className="card-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            More Info
          </button>
        </div>
        <div className="btn-1">
          <button
            className="card-btn"
            onClick={() => {
              addItemsToCart(props.id, props.name, props.image, props.price);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      {openModal === true && (
        <div
          className="modal-background"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          {" "}
        </div>
      )}
      {openModal === true && (
        <InfoModal
          img={props.image}
          name={props.name}
          price={props.price}
          description={props.description}
          category={props.category}
          condition={props.condition}
          openModal={setOpenModal}
        />
      )}
      {openContactModal === true && (
        <div
          className="modal-background"
          onClick={() => {
            setOpenContactModal(false);
          }}
        >
          {" "}
        </div>
      )}
      {openContactModal === true && (
        <ContactModal openModal={setOpenContactModal} />
      )}
    </div>
  );
}

export default Card;
