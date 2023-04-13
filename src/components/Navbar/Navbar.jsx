import React from "react";
import Reactdom from "react-dom";
import "./navbar.css";


function Navbar(props){
    return (
        <div className="navbar">
            <h1>Learn<strong>zy</strong></h1>
            <h1>{props.greeting} {props.name}</h1>
            
        </div>
    )
}

export default Navbar;