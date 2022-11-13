import { orderActions } from "../index";

export const createOrder = (items) => async (dispatch) => {
  dispatch(orderActions.createOrderRequest());
  const response = await fetch("http://localhost:8000/api/order/new", {
    method: "POST",
    body: JSON.stringify(items),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
  if (data.message !== "success") {
    dispatch(orderActions.createOrderFailure(data.error));
  }
};

export const getOrders = () => async (dispatch) => {
  dispatch(orderActions.getAllOrderRequest());
  const response = await fetch("http://localhost:8000/api/orders/all");
  const data = await response.json();
  // console.log(data.orders);
  if (data.message === "success") {
    // console.log('hi');
    dispatch(orderActions.getAllOrderSuccess(data.orders));
  } else orderActions.getAllOrderFailure(data.error);
};
