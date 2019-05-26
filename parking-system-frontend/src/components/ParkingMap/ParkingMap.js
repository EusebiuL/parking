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
            <div >
            <div className={classes.homeWrapper}>
                <Menu />
                <div className={classes.map}>
             <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <rect stroke="#000" transform="rotate(-21 102.5,219.9375) " id="svg_1" height="90.100654" width="48.825662" y="174.887173" x="78.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 135.50000000000006,304.9375) " id="svg_2" height="90.100654" width="48.825662" y="259.887173" x="111.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 149.50000000000017,201.93750000000003) " id="svg_5" height="90.100654" width="48.825662" y="156.887173" x="125.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 182.50000000000023,286.9375000000001) " id="svg_7" height="90.100654" width="48.825662" y="241.887173" x="158.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 228.49999999999997,268.93749999999994) " id="svg_14" height="90.100654" width="48.825662" y="223.887173" x="204.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 242.5,165.93749999999994) " id="svg_15" height="90.100654" width="48.825662" y="120.887173" x="218.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 275.49999999999994,250.9375000000001) " id="svg_16" height="90.100654" width="48.825662" y="205.887173" x="251.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 196.50000000000014,183.93750000000003) " id="svg_17" height="90.100654" width="48.825662" y="138.887173" x="172.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 289.50000000000006,147.93749999999997) " id="svg_18" height="90.100654" width="48.825662" y="102.887173" x="265.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 322.5000000000001,232.93749999999997) " id="svg_19" height="90.100654" width="48.825662" y="187.887173" x="298.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 336.5000000000001,129.9375) " id="svg_20" height="90.100654" width="48.825662" y="84.887173" x="312.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 369.5000000000003,214.93750000000003) " id="svg_21" height="90.100654" width="48.825662" y="169.887173" x="345.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 415.5000000000003,196.93750000000003) " id="svg_22" height="90.100654" width="48.825662" y="151.887173" x="391.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 429.49999999999994,93.93750000000001) " id="svg_23" height="90.100654" width="48.825662" y="48.887173" x="405.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 462.5,178.93750000000003) " id="svg_24" height="90.100654" width="48.825662" y="133.887173" x="438.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
  <rect stroke="#000" transform="rotate(-21 383.5000000000002,111.93750000000003) " id="svg_25" height="90.100654" width="48.825662" y="66.887173" x="359.087169" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
 </g>
</svg>
</div>
            </div>
            
            </div>
        );
    }
}

export default ParkingMap;
//   {/* <script type="test/javascript"
//                      src="https://drive.google.com/open?id=1vtOw20cqj2YjreZj9vTiJctCOcnLCItB&usp=sharing"> fsgsggs
//                      </script> */}