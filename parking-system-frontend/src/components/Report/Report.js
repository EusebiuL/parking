import React, {Component} from "react";
import axios from "axios";
import ReportForm from "./ReportForm/ReportForm";
import classes from "./Report.css";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
class Report extends Component {
    state = {
        plateno: "",
        problem:"",
        authError: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        var basicAuth = 'Basic ' +
            e.preventDefault();
        axios
            .get(
                "http://108fb526.ngrok.io/oauth/token?grant_type=password&username=" +
                this.state.email +
                "&password=" +
                this.state.password
                ,
                {
                    auth: {
                        username: 'my-trusted-client',
                        password: 'secret'
                    }
                }
            )
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    authError: false,
                    access_token: res.data.access_token
                });
                localStorage.setItem("Authorization", res.data.access_token);
                this.props.history.push("/home");

            })
            .catch(error => {
                this.setState({
                    authError: true
                });
            });
    };

    render() {
        const error = this.state.authError ? (
            <p>bad credentials, try again</p>
        ) : null;

        return (
            <div >
                <div >
                    <Menu/>

                </div>

                <div className={classes.outerdiv}>
                    <ReportForm
                        change={(event) => this.handleChange(event)}
                        submit={this.handleSubmit}
                    />

                    <div className={classes.error}>{error}</div>
                </div>
            </div>
        );

    }

}

export default Report;
