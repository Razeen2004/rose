import React from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/img/logo.svg";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="mid">
        <ul>
          <li>Store</li>
          <li>Products</li>
          <li>Price</li>
        </ul>
      </div>
      <div className="right">
        <Link>
          <IoSearch />
        </Link>
        <Link>
          <HiOutlineShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
