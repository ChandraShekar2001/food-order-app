import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/" className={`${classes.links} ${classes["font-poppin"]}`} style={{color:'black'}}>
            ORDER IT
          </Link>
        </div>

        <ul className={classes["nav-list"]}>
          <li className={`${classes.item} ${classes["font-poppin"]} `}>
            <Link
              to="/orders"
              className={`${classes.links}`}
              style={{ fontWeight: "bold", color: "green" }}
            >
              ORDERS
            </Link>
          </li>
          <li className={`${classes.item} ${classes["font-poppin"]}`}>
            <Link
              to="/cart"
              className={`${classes.links}`}
              style={{ fontWeight: "bold", color: "green" }}
              id="contact"
            >
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
