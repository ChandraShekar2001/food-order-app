import React, { useEffect } from "react";
import "./OrderList.css";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/order-actions";

const OrderList = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  //   console.log(orders);
  return (
    <>
      <div className="Container">
        <div className="heading">
          All Orders
          <div className="line"></div>
        </div>
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id} className="container1 orders-list">
                <details>
                  <summary style={{fontWeight: 'bold'}}>ORDER ITEMS</summary>
                        {order.items.map(item => <h6 key={item._id }>{item.itemName}</h6>)}
                </details>
              </div>
            ))
          ) : (
            <p>No Orders</p>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderList;
