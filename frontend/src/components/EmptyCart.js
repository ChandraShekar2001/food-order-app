import React from "react";
import "./EmptyCart.css";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EmptyCart = () => {
  return (
    <>
      <div
        className="container2"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="image">
          {" "}
          <FontAwesomeIcon
            icon={faMugHot}
            style={{ height: "70%", color: "tomato", marginLeft: '30%' }}
          />{" "}
        </div>
        <div className="content">
          <div style={{fontSize:'1.7rem', fontWeight:'bold'}}> Good Food is Always Cooking</div>
          Your cart is empty.Add something from the menu
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
