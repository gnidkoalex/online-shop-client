import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';

import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";



const styles = {
  card: {
    maxWidth: 250,
    minWidth: 100,
   
  },
  media: {
    height: 140,
  },
  textField: {

    maxWidth: 60,
  }
};



class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
//   componentWillReceiveProps(nextProps){
//     console.log("im next props")
//     console.log(nextProps)
    
//   }
  componentDidMount() {

  }
  componentDidUpdate(){
   
  }
  deleteItem= async ()=>{
    let a= await this.props.actions.delCartItem(this.props.logedInUser.cartId,this.props.id);
    let b= await this.props.actions.getCartItems(this.props.logedInUser.cartId)
  }
//   handleAmountChange = e => {
//     let amount = e.target.value
//     this.setState(prevState => ({
//       productAmount:amount

    
      
//     }));

//   }
  // addToCart=(id,amount)=>{
  //   if(amount>=1){
      
  //   }
      

  // }

  render() {
    const { classes } = this.props;
    return (
      
        <div>
             <Card className={classes.card}>
                <CardActionArea>
                  {/* <CardMedia
                    className={classes.media}
                    image="C:/Users/ASUS/Desktop/pics/bannana.jpg"
                    title="bannana"


                  /> */}
                  <CardContent>
                    <Typography component="p">
                      {this.props.id.productName}
                    </Typography>
                    <Typography component="p">
                      {this.props.amount}
                    </Typography>
                    <Button size="small" color="primary" onClick={()=>{
                        console.log(this.props.id)
                        console.log(this.props.logedInUser.cartId)
                        // this.props.actions.delCartItem(this.props.logedInUser.cartId,this.props.id)
                        this.deleteItem()
                        
                    // if(this.state.productAmount>=1){
                      
                    //   this.props.actions.addToCart(this.props.id,this.state.productAmount,this.props.logedInUser.cartId)
                    // }else{
                    //   alert("you must have at least one to add it")
                    // }
                    // this.addToCart(this.props.id,this.state.productAmount)
                  }}>
                  
                    x
                  </Button>

                  </CardContent>
                </CardActionArea>
                <CardActions>
                  
                </CardActions>
              </Card>

            

         
         
        </div>
      
    );
  }
}
function mapStateToProps(state) {
  return {
    logedInUser:state.logedInUser||{}

  }
}

function mapDispatchToProps(dispatch) {
  return {
    
    actions: bindActionCreators(
      {
        // getProducts:allActions.getProducts
        addToCart:allActions.addToCart,
        delCartItem:allActions.delCartItem,
        getCartItems:allActions.getCartItems

      },
      dispatch
    )
  };

}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem));

