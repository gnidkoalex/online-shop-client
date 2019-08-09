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



class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productAmount: 1,
      currProduct:{}

    };
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  componentDidMount() {

  }
  componentDidUpdate(){
   
  }
  handleAmountChange = e => {
    let amount = e.target.value
    this.setState(prevState => ({
      productAmount:amount

    
      
    }));

  }
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
                  <CardMedia
                    className={classes.media}
                    image="C:/Users/ASUS/Desktop/pics/bannana.jpg"
                    title="bannana"


                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      {this.props.name}
                    </Typography>
                    <Typography component="p">
                      {this.props.price + "₪"}
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div> amount : </div>
                  <TextField
                    id="amount"
                    name="amount"
                    type="number"
                    className={classes.textField}
                    // value={this.state.productAmount}
                    // onChange={this.handleAmountChange}
                    // onChange={this.handleInputChange}
                    margin="normal"
                    onClick={this.handleAmountChange}


                  />
                  <br />
                  <br />
                  <br />

                  <Button size="small" color="primary" onClick={()=>{
                    if(this.state.productAmount>=1){
                      this.props.actions.addToCart(this.props.id,this.state.productAmount)
                    }else{
                      alert("you must have at least one to add it")
                    }
                    // this.addToCart(this.props.id,this.state.productAmount)
                  }}>
                  
                    add
                  </Button>
                </CardActions>
              </Card>

            

         
         
        </div>
      
    );
  }
}
function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        // getProducts:allActions.getProducts
        addToCart:allActions.addToCart

      },
      dispatch
    )
  };

}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product));

