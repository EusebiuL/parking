import React, {Component} from "react";
import logo from '../../../logo.svg';
import classes from "./ReportForm.css";

class ReportForm extends Component {

    render(){
        return(
        <div className={classes.wrapper}>
        <img src={logo}></img>
            <form onSubmit={this.props.submit} className={classes.form}>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Car Plate Number" type="text" id="plateno"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Reporting Reason" type="text" id="problem"></input>
                </div>
                <div>
                    <button className={classes.button}>REPORT USER</button>
                </div>
            </form>
        </div>
        );
    }

}

export default ReportForm;