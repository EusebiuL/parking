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
                    <li><Link to="/report" className={classes.link}>Report</Link></li>
                    <li><Link to="/user" className={classes.link}>User</Link></li>
                    <li><Link to="/parkingmap" className={classes.link}>ParkingMap</Link></li>
                </ul>
            </header>
        );
    }
}

export default Menu;
