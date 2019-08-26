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
import Button from 'react-bootstrap/Button';






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
            view:"cart"


        };
    }
    componentWillReceiveProps() {

    }
    componentDidMount() {
        if(this.state.view != 0){
            this.setState({
                view:"cart"
            })
        }


    }
    componentDidUpdate() {

    }
    changeView=()=>{
        this.setState({
            view:"shipping"

        })
    }
    confirmAndPay=()=>{
        if(this.props.cartItems.length==0){
            alert("your cart is empty")

        }else{
        alert("your order has been successfuly complited")
        }
    }


    render() {
        let chekoutPrice = 0;
        this.props.cartItems.map((item) => {
            chekoutPrice += item.totalPrice;
        })
        const { classes } = this.props;
        return (
            <div>
                <h1>check out</h1>
                {this.props.cartItems.map((item) => {
                    return (
                        <div>
                            <span>{item.itemId.productName}({item.itemId.price}) x {item.amount}={item.totalPrice}₪</span>
                        </div>

                    )

                })}<br/>
                <span style={{ color: '#007bff' }}> total cart price : {chekoutPrice}₪</span>
                <br/><br/>
                <Button  onClick={()=>{
                    this.changeView()
                }}>continue</Button>
                {this.state.view=="shipping"&&(
                    
                       <div style={{ marginLeft: 70 }}>
                           <h1 style={{ marginRight: 90 }}>shipping info</h1>
                       <Grid container spacing={0} alignItems="flex-end">
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                       <TextField id="city" label="city" value={this.state.city} onChange={e => { this.setState({ city: e.currentTarget.value }) }} />
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                           <TextField id="date" label="" type="date" value={this.state.date} onChange={e => { this.setState({ date: e.currentTarget.value }) }} />
                       
                       </Grid>
                       <Grid container spacing={0} alignItems="flex-end">
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     
                       <TextField id="adress" label="adress" value={this.state.adress} onChange={e => { this.setState({ adress: e.currentTarget.value }) }} />
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                       <TextField id="creditCard" label="credit card" type="number" value={this.state.creditCard} onChange={e => { this.setState({ creditCard: e.currentTarget.value }) }} />
                       </Grid>
                       <Grid>
                           <br/>
                       <Button variant="success" style={{ marginRight: 70 }} onClick={()=>{this.confirmAndPay()}}>confirm &amp; pay</Button>
                       </Grid>
                   
                   </div>
                   
   

                )}
             













            </div>



        );
    }
}
function mapStateToProps(state) {
    return {
        logedInUser: state.logedInUser || {},
        cartItems: state.cartItems || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                // getProducts:allActions.getProducts
                // addToCart: allActions.addToCart
                userLogin: allActions.userLogin

            },
            dispatch
        )
    };

}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(checkOut));

















