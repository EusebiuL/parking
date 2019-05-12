import React, {Component} from "react";
import classes from "./ParkingMap.css";
import Menu from "../Authentication/Register/Menu/Menu";
import { Link } from "react-router-dom";

class ParkingMap extends Component {
/*
    <script type="test/javascript"
    src="http://maps.google.com/maps/api/js?sensor=false">
    </script>
*/

    render(){
        return (
            <div>
            <div className={classes.homeWrapper}>
                <Menu />
            </div>
             <div>
                 <script type="test/javascript"
                     src="https://drive.google.com/open?id=1vtOw20cqj2YjreZj9vTiJctCOcnLCItB&usp=sharing"> fsgsggs
                     </script>
             </div>
            </div>
        );
    }
}

export default ParkingMap;
