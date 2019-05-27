import React, { Component } from "react";
import classes from "./ParkingMap.css";
import Menu from "../Authentication/Register/Menu/Menu";
import { Link } from "react-router-dom";

class ParkingMap extends React.Component {
    /*
        <script type="test/javascript"
        src="http://maps.google.com/maps/api/js?sensor=false">
        </script>
    */
    constructor(props) {
        super(props);
        this.state = {
            takenLots: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ]
        }
    }
    handleClick = (index) => {
        let state = this.state;
        state.takenLots[index] = !state.takenLots[index];
        console.log(this.state.takenLots[0]);
        this.setState(state);
    }
    render() {
        console.log(this.state.takenLots);
        return (
            <div >
                <div className={classes.homeWrapper}>
                    <Menu />

                    <div className={classes.map}>
                        <div className={classes.mapTitle}>
                            Choose your parking lot
                    </div>
                        <svg width="829" height="652" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <title>background</title>
                                <rect x="-1" y="-1" width="831" height="654" id="canvas_background" fill="none" />
                            </g>

                            <g>
                                <title>Layer 1</title>
                                <rect className={this.state.takenLots[0] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 0)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="28.717107" y="121.102364" width="103.168691" height="258.329538" id="svg_1" transform="rotate(-10 80.30145263671842,250.2671508789063) " fill="#FFF" />
                                <rect className={this.state.takenLots[1] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 1)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="130.717107" y="103.102364" width="103.168691" height="258.329538" id="svg_3" transform="rotate(-10 182.30145263671827,232.26715087890625) " fill="#FFF" />
                                <rect className={this.state.takenLots[2] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 2)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="233.717107" y="85.102364" width="103.168691" height="258.329538" id="svg_10" transform="rotate(-10 285.30145263671875,214.26712036132827) " fill="#FFF" />
                                <rect className={this.state.takenLots[3] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 3)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="336.717107" y="66.102364" width="103.168691" height="258.329538" id="svg_11" transform="rotate(-10 388.3014526367183,195.26712036132784) " fill="#FFF" />
                                <rect className={this.state.takenLots[4] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 4)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="439.717107" y="48.102364" width="103.168691" height="258.329538" id="svg_12" transform="rotate(-10 491.3014526367185,177.26712036132827) " fill="#FFF" />
                                <rect className={this.state.takenLots[5] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 5)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="542.618088" y="30.102364" width="103.168691" height="258.329538" id="svg_13" transform="rotate(-10 594.2024536132812,159.26713562011724) " fill="#FFF" />
                                <rect className={this.state.takenLots[6] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 6)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="645.618088" y="12.102364" width="103.168691" height="258.329538" id="svg_16" transform="rotate(-10 697.2024536132812,141.26713562011767) " fill="#FFF" />
                                <rect className={this.state.takenLots[7] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 7)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="73.717107" y="375.102364" width="103.168691" height="258.329538" id="svg_2" transform="rotate(-10 125.30145263671851,504.26708984374994) " fill="#FFF" />
                                <rect className={this.state.takenLots[8] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 8)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="175.717107" y="358.102364" width="103.168691" height="258.329538" id="svg_4" transform="rotate(-10 227.3014526367188,487.26708984374994) " fill="#FFF" />
                                <rect className={this.state.takenLots[9] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 9)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="278.717107" y="339.102364" width="103.168691" height="258.329538" id="svg_5" transform="rotate(-10 330.30145263671835,468.26708984375017) " fill="#FFF" />
                                <rect className={this.state.takenLots[10] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 10)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="381.717107" y="322.102364" width="103.168691" height="258.329538" id="svg_6" transform="rotate(-10 433.3014526367188,451.26708984374983) " fill="#FFF" />
                                <rect className={this.state.takenLots[11] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 11)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="484.717107" y="304.102364" width="103.168691" height="258.329538" id="svg_7" transform="rotate(-10 536.3014526367184,433.2671203613279) " fill="#FFF" />
                                <rect className={this.state.takenLots[12] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 12)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="587.618088" y="285.102364" width="103.168691" height="258.329538" id="svg_8" transform="rotate(-10 639.2024536132811,414.26712036132784) " fill="#FFF" />
                                <rect className={this.state.takenLots[13] ? classes.active : classes.notActive} onClick={this.handleClick.bind(null, 13)} stroke="#000" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x="690.618088" y="267.102364" width="103.168691" height="258.329538" id="svg_17" transform="rotate(-10 742.2024536132816,396.2671203613283) " fill="#FFF" />
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