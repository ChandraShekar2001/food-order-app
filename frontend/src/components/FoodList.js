import React from "react";
import "./FoodList.css";
import FoodItem from "./FoodItem";
import "../App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "../store/actions/food-actions";


const FoodList = () => {
  const dispatch = useDispatch();

  const { foods, loading } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  // console.log(foods);
  return (
    <>
      <div className="Container body">
        <div className="heading">
          All Items
          <div className="line"></div>
        </div>
        <div className="fooditems">
          {!loading ? (
            foods.map((food) => (
              <FoodItem
                key={food._id}
                itemName={food.itemName}
                price={food.price}
                quantity={food.quantity}
                id={food._id}
              />
            ))
          ) : (
            <p>Loading.....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodList;
