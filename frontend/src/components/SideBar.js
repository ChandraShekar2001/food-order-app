import React from "react";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../store/slices/AdminCreateFormShowSlice";

import {
  faBars,
  faCodeFork,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Outlet } from "react-router-dom";

const AdminSideBar = ({ children }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.FormShow.show);

  const onToggleHangler = () => {
    dispatch(showAction.toggleShow());
  };

  const menuItem = [
    {
      path: "/orders",
      name: "All Orders",
      icon: faCodeFork,
    },
    {
      path: "/cart",
      name: "Cart",
      icon: faCartShopping,
    },
  ];
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div className="container" style={{ width: !show ? "5%" : "18%" }}>
          <div style={{ width: "100%" }} className="sidebar">
            <div className="top_section">
              {show && <h1 className="logo">FOOD APP</h1>}
              <div className={show ? "bars" : "bars2"}>
                <FontAwesomeIcon
                  onClick={onToggleHangler}
                  icon={show ? faXmark : faBars}
                />
              </div>
            </div>
            {menuItem.map((item, index) => (
              <Link to={item.path} key={index} className="link">
                <div className="iconTextLink">
                  <div className={show ? "Adminicon" : "AdminIconClose"}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {show && <div className="link_text">{item.name}</div>}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
