import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';

import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"; import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';




const styles = {


    card: {
        maxWidth: 230,
        minWidth: 230,
    },
    media: {
        height: 140,
    },
    textField: {


        maxWidth: 60,
    }
};



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            button: "next",
            Rbutton: ""


        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.logedInUser != {}) {
            this.props.history.push("/main")
        } else if (localStorage.getItem("session") != "") {

        }

    }
    componentDidMount() {


    }
    componentDidUpdate() {

    }
    stepChange = () => {
        let step = 2
        let button = "back"
        let Rbutton = "Register"
        if (this.state.step == 2) {
            step = 1
            button = "next"
            Rbutton = ""

        }
        this.setState({
            step: step,
            button: button,
            Rbutton: Rbutton
        })
    }



    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>register</h1>

                <div style={{ marginLeft: 250 }}>
                    {this.state.step == 1 && (
                        <div>
                            <Grid container spacing={0} alignItems="flex-end">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="userName" label="user name" value={this.state.userName} onChange={e => { this.setState({ userName: e.currentTarget.value }) }} />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="userId" label="id" type="number"value={this.state.userId} onChange={e => { this.setState({ userId: e.currentTarget.value }) }} />
                            </Grid>
                            <Grid container spacing={0} alignItems="flex-end">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="password" label="password" type="password" value={this.state.password} onChange={e => { this.setState({ password: e.currentTarget.value }) }} />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="confirmPassword" label="confirm password" type="password" value={this.state.confirmPassword} onChange={e => { this.setState({ confirmPassword: e.currentTarget.value }) }} />
                            </Grid>
                        </div>
                    )}

                    {this.state.step == 2 && (
                        <div>
                            <Grid container spacing={0} alignItems="flex-end">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="firstName" label="first name" type="text" value={this.state.firstName} onChange={e => { this.setState({ firstName: e.currentTarget.value }) }} />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="lastName" label="last Name"  type="text" value={this.state.lastName} onChange={e => { this.setState({ lastName: e.currentTarget.value }) }} />
                            </Grid>
                            <Grid container spacing={0} alignItems="flex-end">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="city" label="city"  type="text" value={this.state.city} onChange={e => { this.setState({ city: e.currentTarget.value }) }} />
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <TextField id="adress" label="adress" value={this.state.adress} onChange={e => { this.setState({ adress: e.currentTarget.value }) }} />
                            </Grid>
                        </div>
                    )}

                    <Grid container spacing={0} alignItems="flex-end">

                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;<br /> <br />
                        <Button size="small" color="primary" onClick={() => {

                            this.stepChange()

                        }}>

                            {this.state.button}
                        </Button>
                        <Button size="small" color="primary" onClick={() => {
                            if (this.state.userName && this.state.userId && this.state.password && this.state.confirmPassword && this.state.firstName && this.state.lastName && this.state.city && this.state.adress) {
                                if (this.state.password === this.state.confirmPassword) {
                                    let registeredUser={}
                                    registeredUser.username=this.state.userName;
                                    registeredUser.userId=this.state.userId;
                                    registeredUser.password=this.state.password;
                                    registeredUser.name=this.state.firstName;
                                    registeredUser.lastname=this.state.lastName
                                    registeredUser.city=this.state.city;
                                    registeredUser.adress=this.state.adress
                                    console.log(registeredUser)
                                    this.props.actions.register(registeredUser)

                                } else {
                                    alert("passwords dont match")
                                }

                            }else{
                                alert("params missing")
                            }

                        }}>


                            {this.state.Rbutton}
                        </Button>



                    </Grid>



                </div>
            </div>



        );
    }
}
function mapStateToProps(state) {
    return {
        logedInUser: state.logedInUser || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                userLogin: allActions.userLogin,
                register: allActions.register

            },
            dispatch
        )
    };

}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Register));

