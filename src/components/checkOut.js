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



class checkOut extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }
    componentWillReceiveProps() {
    
    }
    componentDidMount() {
        

    }
    componentDidUpdate() {

    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.props.cartItems.map((item)=>{
                    return(
                        <div>
                        <span>{item.itemId.productName}</span>
                        </div>
                    )
                })}
            </div>
               


        );
    }
}
function mapStateToProps(state) {
    return {
        logedInUser:state.logedInUser||{},
        cartItems: state.cartItems || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                // getProducts:allActions.getProducts
                // addToCart: allActions.addToCart
                userLogin:allActions.userLogin

            },
            dispatch
        )
    };

}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(checkOut));

















