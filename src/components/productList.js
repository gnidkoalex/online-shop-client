import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';
import CartItem  from '../components/cartItem';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCartPrice:0,
      cartItemTry:[],


    }
  }
  componentDidMount() {
    // this.props.actions.getCartItems()
    // console.log(this.props.state)

    // this.handleCartItems()
    if (this.props.logedInUser.cartId) {
      console.log(this.props.logedInUser.cartId)
      this.props.actions.getCartItems(this.props.logedInUser.cartId)
    }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      cartItemTry:nextProps.cartItems
    })
    // if(nextProps.cartItems.length>0){
    //   let total=0
    //   nextProps.cartItems.map((item) => {
    //     total+=item.totalPrice
    //   })
    //   this.setState({
    //   totalCartPrice:total
    //   });
     
    // }

    // this.handleCartItems()
    
   
  }
  componentDidUpdate() {
    
  }
  handleCartItems = () => {
    if (this.props.logedInUser.cartId) {
      console.log(this.props.logedInUser.cartId)
      this.props.actions.getCartItems(this.props.logedInUser.cartId)
    }

  }
  updateTotalPrice=(cartItem)=>{
    this.setState({
      totalCartPrice:cartItem
      });

  }


  render() {
    let totalPrice=0;
    this.props.cartItems.map((item)=>{
      totalPrice+=item.totalPrice;
    })
    return (
      

      <div>
        <h1>cart</h1>
        <button onClick={() => {
          this.handleCartItems()
        }}>get cart</button>
        {/* {console.log(this.props.logedInUser.cartId)} */}
        <div>
          {
            
          
            this.props.cartItems.map((item) => {
            console.log(item)
            return (
              
              // <div id={item.id}>
              //   <div>{item._id}</div>
              //   <h1>{item.amount}</h1>
              //   <button onClick={(e) => {
              //     console.log(e.target)
              //   }}>del</button>
              // </div>
              <CartItem id={item.itemId} amount={item.amount}/>
            )



          })}
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
        getCartItems: allActions.getCartItems

      },
      dispatch
    )
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
