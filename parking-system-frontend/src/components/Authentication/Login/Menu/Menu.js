import React, {Component} from "react";
import axios from "axios";
import classes from "./Menu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    render(){
        return (
            <header className={classes.menuWrapper}>
                <ul>
                <li><Link to="/register" className={classes.link}>Register</Link></li>
                <li><Link to="/login" className={classes.link}>Login</Link></li>
               
                </ul>
            </header>
        );
    }
}

export default Menu;
