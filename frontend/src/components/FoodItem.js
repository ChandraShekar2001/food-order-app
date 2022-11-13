import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cbiryani from "../components/images/cbiryani.jpg";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItem } from "../store/actions/cart-actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {useAlert} from 'react-alert'

const FoodItem = (props) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [Quantity, setQuantity] = useState(1);

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(props.id, Quantity));
    alert.success('Item added to cart')
  };

  const onDecreaseHandler = () => {
    if (Quantity === 1) return;
    setQuantity(Quantity - 1);
  }

  return (
    <Card
      style={{
        width: "18rem",
        height: "25rem",
        margin: "1em",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Card.Img variant="top" src={cbiryani} style={{ height: "70%" }} />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <Card.Text>
          <form>
            <label>Quantity : </label>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ width: "10%", fontSize: "0.75rem", margin: "0.25em" }}
              onClick={e=>setQuantity(Quantity+1)}
            />
            <input
              type="text"
              style={{ width: "10%", border: "none" }}
              onChange={(e) => setQuantity(e.target.value)}
              value={Quantity}
            />
            <FontAwesomeIcon
              icon={faMinus}
              style={{ width: "10%", fontSize: "0.75rem", margin: "0.25em" }}
              onClick={onDecreaseHandler}

            />
          </form>
          Price : {props.price}Rs.
        </Card.Text>
        <Button variant="primary" onClick={addToCartHandler}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;
