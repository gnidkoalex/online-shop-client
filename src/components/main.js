import React, { Component } from 'react';

// import './App.css';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux';
import ProductsComponent from "./products"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./header";
import Cart from "./productlist";
import LoginComponent from "./login";



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Main extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    let session= localStorage.getItem("session")
    if (this.props.logedInUser.cartId) {   
      this.props.actions.getProducts();
      this.props.actions.getCategories();
      console.log("both")
    
    }else if(session){
      console.log("only")
      this.afterRefresh(session)
      this.props.actions.getCartItems(this.props.logedInUser.cartId)
      

        // this.props.actions.verifySession(session)
        // this.props.actions.getProducts();
        // this.props.actions.getCategories();
        // this.props.actions.getCartItems(this.props.logedInUser.cartId)
     //turn to async function 
    }
    else {
      console.log("none")
      this.props.history.push("/")
    }

  }
  componentDidUpdate() {
    console.log(this.props.products);
  }
  afterRefresh=async(session)=>{
    console.log("afterrefres")
    let a= await this.props.actions.verifySession(session)
    console.log("1")
    let b= await this.props.actions.getProducts();
    console.log("2")
    let c= await this.props.actions.getCategories();
    console.log("3")
    let d= await this.props.actions.getCartItems(this.props.logedInUser.cartId)
    console.log("4")
    let s= await this.props.actions.getCartItems(this.props.logedInUser.cartId)
    console.log("4")
    
    

  }
 

  render() {
    const { classes } = this.props;

    return (

      <BrowserRouter>

        <div className="App">
          {/* {!this.props.logedInUser&&this.props.history.push("/")} */}
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Paper className={classes.paper}><Cart /></Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}><Header />
                <Switch>

                  <Route path="/main/:name" component={ProductsComponent} />

                </Switch></Paper>
            </Grid>
          </Grid>





        </div>
      </BrowserRouter>
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
        getProducts: allActions.getProducts,
        getCategories: allActions.getCategories,
        verifySession: allActions.verifySession,
        getCartItems:allActions.getCartItems,
        

      },
      dispatch
    )
  };

}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));

