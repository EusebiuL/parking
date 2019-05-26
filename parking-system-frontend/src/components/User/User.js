import React, {Component} from "react";
import classes from "./User.css";
import Menu from "../Authentication/Register/Menu/Menu";
import { Link } from "react-router-dom";

class User extends Component {
    render(){
        return (
            <div className={classes.homeWrapper}>
                <Menu />
            </div>
        );
    }
}

export default Menu;
