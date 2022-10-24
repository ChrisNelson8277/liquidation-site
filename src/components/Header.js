import React, { useState } from "react";
import "./css/Header.css";
import logo from "./logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import styles from "./css/cart.css";
import { Badge } from "@mui/material";

function Header(props) {
  const [show, setShow] = useState();
  let navigate = useNavigate();
  function handleSignupClick() {
    navigate("/login");
    props.page("login");
  }
  function goHome() {
    navigate("/");
  }
  function handleOtherClick(e) {
    e.preventDefault();
    props.openCart(!props.cartState);
  }
  const cartNumber = parseInt(props.cartLength);
  return (
    <nav>
      <div className="header">
        <div>
          <img className="logo-img" src={logo} alt="Lucky Liquidation's"></img>
        </div>
        <ul className="header-ul">
          <li>
            <Link
              to="/"
              offset={10}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link to="/adminpanel" onClick={handleSignupClick}>
              AdminPanel
            </Link>
          </li>
          <div
            className="cart-amount"
            onClick={(e) => {
              handleOtherClick(e);
            }}
          >
            <li>
              <Badge color="primary" badgeContent={cartNumber}>
                <BsCartFill color="action" />
              </Badge>
            </li>
          </div>
        </ul>
        {/* <button className='btn-header' onClick={() => {props.page("home")}}>Listings</button>
        <button className='btn-header'>About Us!</button>
        <button className='btn-header' onClick={() => {props.page("addProduct")}}>Add Product</button> */}
      </div>
    </nav>
  );
}

export default Header;
