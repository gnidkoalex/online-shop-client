import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';
import 'bootstrap/dist/css/bootstrap.css';
import Product from "../components/product"
// matireal ui 
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


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // categoryName: this.props.match.params.name,
      categoryName: "somthing",
      
      // productAmount: 1,
      // currProduct:{}

    };

  }

  componentDidMount() {
    this.handeleCategoryChange("drinks")
  

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.name)
    if(nextProps.match.params.name=="checkout"){
      this.setState({
        checkout:1
      })
      console.log("checkout")
    }else{
      this.setState({
        checkout:0
      })
      this.handeleCategoryChange(nextProps.match.params.name.toLowerCase())
  
    }

  
    
  }


  getCategoryId(categoryName) {
    let categoryNeded = categoryName
    // let categoryNeded= categoryName.match.params.name
    let categoryId = this.props.categories.filter(function (category) {
      return category.categoryName.toLowerCase() == categoryNeded.toLowerCase()
    });
    if (categoryId[0]) {
      this.props.actions.getProductsByCategory(categoryId[0])

    }

  }

  handeleCategoryChange = (category) => {
    console.log(category)
    if (category != "" && category != undefined && category != null && category.toLowerCase() != this.state.categoryName.toLowerCase()) {
      this.getCategoryId(category.toLowerCase())
      this.setState({ categoryName: category.toLowerCase() })


    }

  }
  // handleAmountChange = e => {
  //   let amount = e.target.value
  //   console.log(e)
  //   this.setState(prevState => ({
  //     productAmount:amount
    
      
  //   }));

  // }
  
 




  render() {
    const { classes } = this.props;

    return (
      
      <div className="container">
        <h1>{this.props.match.params.name}</h1>
        <div className="row">
          {!this.state.checkout==1&&(<div className="row">
            {this.props.productsByCategory.map((product, index) => {
            return (
              <div>
                <Product name={product.productName}price={product.price} id={product._id}/>
              </div>
            
            )
          })}
          </div>)}

       
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories || [],
    productsByCategory: state.productsByCategory || [],
    logedInUser:state.logedInUser||{},
    cartItems: state.cartItems || [],

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProducts: allActions.getProducts,
        getCategories: allActions.getCategories,
        getProductsByCategory: allActions.getProductsByCategory,
    

      },
      dispatch
    )
  };

}

export default withStyles(styles)
  (connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products));
