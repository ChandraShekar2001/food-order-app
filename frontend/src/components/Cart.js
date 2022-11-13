import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";
import IndividualCartItem from "./IndividualCartItem";
import { createOrder } from "../store/actions/order-actions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const alert = useAlert();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onCheckoutHandler = (e) => {
    e.preventDefault();
    dispatch(createOrder(cartItems));
    alert.success("Order Successsful");
    navigate("/orders");
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const GST = Number(0.18 * total);
  return (
    <>
      <div className="container">
        <div className="cartItems">
          <h1 className="cartItems-title" style={{ textAlign: "center" }}>
            YOUR CART
          </h1>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <IndividualCartItem
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.itemName}
                quantity={cartItem.quantity}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        <div className="cart-details">
          <h5 style={{ borderBottom: "1px solid black", padding: "0.5em" }}>
            PAYMENT DETAILS
          </h5>
          <div className="price-details">
            <h5 className="price-details-title">Subtotal :</h5>
            <h5 className="price-details-price">{total} Rs.</h5>
          </div>
          <div className="price-details">
            <h5 className="price-details-title">GST(18%) :</h5>
            <h5 className="price-details-price">{GST} Rs.</h5>
          </div>
          <div className="price-details">
            <h5 className="price-details-title">Total :</h5>
            <h5 className="price-details-price">{total + GST} Rs.</h5>
          </div>
          <div
            className="price-details"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button variant="primary" onClick={onCheckoutHandler}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
