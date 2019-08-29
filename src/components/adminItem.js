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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";



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



class AdminItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: "",
      category: {},
      categoryId:"",
      id:"",
      selectedFile:{},



    };
  }
  //   componentWillReceiveProps(nextProps){
  //     console.log("im next props")
  //     console.log(nextProps)

  //   }
  componentDidMount() {
    if (this.props.item) {
      console.log(this.props.item)

      let currentCategory = this.categoryIdToName(this.props.item.categoryId[0])
      console.log(currentCategory[0])
      this.setState({
        productName: this.props.item.productName,
        price: this.props.item.price,
        category: currentCategory[0].categoryName,
        categoryId:currentCategory[0]._id,
        id: this.props.item._id

      })
    }


  }
  componentDidUpdate() {



  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      let currentCategory = this.categoryIdToName(nextProps.item.categoryId[0])
      this.setState({
        productName: nextProps.item.productName,
        price: nextProps.item.price,
        category: currentCategory[0].categoryName,
        categoryId: currentCategory[0]._id,
        id: nextProps.item._id

      })
    }




  }
  categoryIdToName = (id) => {
    let categoryy = this.props.categories.filter(function (category) {
      return category._id == id

    })
    return categoryy

  }
  categoryNameToId = (name) => {
    let categoryy = this.props.categories.filter(function (category) {
      return category.categoryName == name

    })
    console.log(categoryy)
    return categoryy[0]._id

  }
  categoryHandle = (e) => {
    let categoryId=this.categoryNameToId(e.target.value)

    
    this.setState({
      category: e.target.value,
      categoryId:categoryId
    })

  }
  handleFile=(e)=>{
    this.setState({
      selectedFile:e.target.files[0]
    })
  }
  updateProduct=()=>{
    let product = new FormData()
    product.append('file', this.state.selectedFile, this.state.selectedFile.name);
    product.append('id',this.state.id)
    product.append('price',this.state.price)
    product.append('categoryId',this.state.categoryId)
    product.append('productName',this.state.productName)
    
    // let product={}
    // product.id=this.state.id;
    // product.price=this.state.price;
    // product.categoryId=this.state.category;
    // product.image=image;
    // console.log(product)
    axios
    .post(`http://localhost:2200/products/update`, product, {
    })
    .then(res => {
      console.log(res)
    })
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
            {console.log(this.props.item)}
            {/* <CardMedia
                    className={classes.media}
                    image="C:/Users/ASUS/Desktop/pics/bannana.jpg"
                    title="bannana"


                  /> */}
            <CardContent>
              <span>Product name:</span>
              <TextField id="productName" placeholder="product name" type="string" value={this.state.productName} onChange={e => { this.setState({ productName: e.currentTarget.value }) }} />
              <span>price:</span>
              <TextField id="price" placeholder="price" type="number" value={this.state.price} onChange={e => { this.setState({ price: e.currentTarget.value }) }} />
              <div>category:</div>
              <Select
                value={this.state.category}
                onChange={this.categoryHandle}
              // inputProps={{
              //   name: 'age',
              //   id: 'age-simple',
              // }}

              >
                {this.props.categories.map((category) => {
                  return (
                    <MenuItem value={category.categoryName}>{category.categoryName}</MenuItem>
                  )


                })}
                {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
              <br/><br/>
              <div>image:</div>
              <input type="file" onChange={this.handleFile}/>
              <br/>



              {/* <Typography component="p">
                      {this.props.item.price}
                    </Typography>
                    <Typography component="p">
                      {this.props.amount}
                    </Typography> */}
             
              <Button size="small" color="primary" onClick={() => {
                console.log(this.state)
              }}>

                save
                  </Button>
                  <Button size="small" color="primary" onClick={this.updateProduct}>

                product
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
    logedInUser: state.logedInUser || {},
    categories: state.categories || [],

  }
}

function mapDispatchToProps(dispatch) {
  return {

    actions: bindActionCreators(
      {
        // getProducts:allActions.getProducts
        addToCart: allActions.addToCart,
        delCartItem: allActions.delCartItem,
        getCartItems: allActions.getCartItems

      },
      dispatch
    )
  };

}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminItem));

