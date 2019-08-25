import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';
import CartItem  from '../components/cartItem';
import Button from '@material-ui/core/Button';
import { MenuItem, Navbar, Nav, NavItem } from "react-bootstrap";




class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCartPrice:0,
      cartItemTry:0


    }
  }
  

  
  componentDidMount() {
   
    this.handleInitialCartItems()

  }
  componentWillReceiveProps(nextProps) {
    // console.log("next props hhh")
    // console.log(nextProps.cartItems.length)
    

    
   
  }
  componentDidUpdate() {
    
  
    
    
  }
  handleInitialCartItems = () => {
    if (this.props.logedInUser.cartId) {
      console.log(this.props.logedInUser.cartId)
      this.props.actions.getCartItems(this.props.logedInUser.cartId)
    }

  }
  handleCartItems = (nextCartItems)=>{
  }
  checkot=()=>{
    this.props.goToCheckout()

  }


  

  render() {
    let totalPrice=0;
    this.props.cartItems.map((item)=>{
      totalPrice+=item.totalPrice;
    })
    return (
      

      <div>
        <h1>cart</h1>
        <div>
          
          {
            
          
            this.props.cartItems.map((item) => {
            return (
     
              <CartItem id={item.itemId} amount={item.amount}/>
          
            )



          })}
          <Button>delete all</Button>
          <Navbar.Brand>
            <Link to="/main/checkout"> checkot</Link>
          </Navbar.Brand>
          <Button onClick={()=>this.checkot()}>checkout</Button>
          
        </div>
        total price:{totalPrice}




      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    cartItems: state.cartItems || [],
    logedInUser: state.logedInUser || {}

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCartItems: allActions.getCartItems,
        

      },
      dispatch
    )
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
