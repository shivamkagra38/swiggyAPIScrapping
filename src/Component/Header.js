import React, { use } from "react";
import ReactDOM from "react-dom/client";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "../customHooks/useOnline";
import UserContext from "../UserContext";

//Redux
import { useSelector } from "react-redux";
//import appStore from "../utils/appStore.js"

const Header = (props) => {

    console.log("header render");

    const[button, setButton] = useState("Log In !");

    const status = useOnline();

    const data = useContext(UserContext);
   

    //Redux - Subscribing to the store using a selector
    const cartSelector = useSelector((store) => {return store.cart.items});
   // console.log(cartSelector);

    return (
        <div className="header flex justify-around items-center p-5 bg-pink-50 shadow-lg">
            <div className="logo text-2xl"><span>i</span>ON Eats</div>
            <div className="nav-items">
                <ul className="flex gap-3">
                    <li>Current Status : {status === false ? "🔴" :"🟢"}</li>
                    <li><Link to="/" children="Home" /></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/grocery" >Grocery</Link></li>
                    <li><Link to="/cart">Cart({cartSelector.length})</Link></li>
                    {/* <li><a href="/cart">cart</a></li> */}
                    <button className="login-logout" onClick={()=>{
                        if(button === "Log In !")
                        {
                            setButton("Log Out !");
                            return;
                        }
                        setButton("Log In !");
                    }}>{button}</button>
                    <li>Name : {data.loggedIn}</li>
                </ul>   
            </div>
        </div>
    );
}

export default Header;