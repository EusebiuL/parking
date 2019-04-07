import React, {Component} from "react";
import axios from "axios";
import classes from "./Home.css";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
//   <Link to="/quiz" className={classes.homeButton}>Create quiz</Link>
class Home extends Component {
    render(){
        return (
            <div className={classes.homeWrapper}>
                <Menu />
                <h1>Easiest and fastest way to park, right in your reserved spot!</h1>
             
            </div>
        );
    }
}

export default Home;
