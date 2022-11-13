import React from "react";
import "./IndividualCartItem.css";
import Button from "react-bootstrap/Button";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  removeCompleteCartItem,
} from "../store/actions/cart-actions";

const IndividualCartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="individual-cart-item">
          <div className="title">
              <h4>{props.name}</h4>
          </div>
      <div className="quantity">
        <form>
          <label style={{fontWeight: 'bold'}}>Quantity : </label>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: "10%", fontSize: "0.75rem", margin: "0.25em", pointer:'cursor' }}
            onClick={(e) => dispatch(addItem(props.id, 1))}
          />
          <input
            type="text"
            style={{ width: "20%", border: 'none', textAlign: "center"}}
            onChange={(e) => dispatch()}
            value={props.quantity}
            disabled
          />
          <FontAwesomeIcon
            icon={faMinus}
            style={{ width: "10%", fontSize: "0.75rem", margin: "0.25em", pointer:'cursor' }}
            onClick={(e) => dispatch(removeItem(props.id))}
          />
        </form>
      </div>
      <Button
        variant="danger"
        onClick={(e) => dispatch(removeCompleteCartItem(props.id))}
      >
        Remove
      </Button>
    </div>
  );
};

export default IndividualCartItem;
