import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';
import CartItem from '../components/cartItem';
import Button from 'react-bootstrap/Button';
import { MenuItem, Navbar, Nav, NavItem } from "react-bootstrap";
import AdminItem from "./adminItem";




class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCartPrice: 0,
      cartItemTry: 0,
      productToEdit: {},
      addProduct:false,


    }
  }



  componentDidMount() {

    this.handleInitialCartItems()

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.productToEdit) {
      this.setState({
        productToEdit: nextProps.productToEdit
      })
    }
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
  // handleCartItems = (nextCartItems)=>{
  // }
  // checkot=()=>{
  //   this.props.goToCheckout()

  // }
  deleteAll = async () => {
    await this.props.actions.deleteAllCartitems(this.props.logedInUser.cartId)
    this.props.actions.getCartItems(this.props.logedInUser.cartId)
  }
  addProduct=()=>{
    let addProduct=true
    if(this.state.addProduct==true){
      addProduct=false
    }
    this.setState({
      addProduct:addProduct
    })

  }




  render() {
    let totalPrice = 0;
    this.props.cartItems.map((item) => {
      totalPrice += item.totalPrice;
    })
    return (


      <div>
        <h1>admin page</h1>
        <div>

          {Object.entries(this.state.productToEdit).length != 0 && (
            <AdminItem item={this.state.productToEdit} />
          )}
          {this.state.addProduct==true&&(
            <AdminItem/>
          )}

          

          <Button onClick={this.addProduct}>add new product</Button>












          {/* <Button onClick={()=>{
           this.deleteAll()
          }}>delete all</Button>
          <Navbar.Brand>
            <Link to="/main/checkout"> checkout</Link>
          </Navbar.Brand> */}
          


        </div>
        {/* total price:{totalPrice} */}




      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    cartItems: state.cartItems || [],
    logedInUser: state.logedInUser || {},
    productToEdit: state.productToEdit || [],

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCartItems: allActions.getCartItems,
        deleteAllCartitems: allActions.deleteAllCartitems,


      },
      dispatch
    )
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
