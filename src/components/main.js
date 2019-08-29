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
import CheckoutComponent from '../components/checkOut';
import Admin from '../components/admin';




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
    this.state = {
      Refresh: 0


    };
  }


  componentDidMount() {
    let session = localStorage.getItem("session")
    if (this.props.logedInUser.cartId) {
      this.props.actions.getProducts();
      this.props.actions.getCategories();
      console.log("both")

    } else if (session) {
      console.log("only")
      this.props.actions.getProducts();
      this.props.actions.getCategories();
      this.afterRefresh(session)
    }
    else {
      console.log("none")
      this.props.history.push("/")

    }

  }
  componentDidUpdate() {
    let session = localStorage.getItem("session")
    if (!session) {
      this.props.history.push("/")

    }

  }
  afterRefresh = async (session) => {
    this.props.actions.verifySession(session)
    this.waitingForLogIn()


  }
  waitingForLogIn = () => {
    setTimeout(() => {
      if (this.props.logedInUser.cartId == undefined) {
        this.waitingForLogIn()
      } else {
        this.props.actions.getCartItems(this.props.logedInUser.cartId)
      }

    }, 1000);

  }
  goToLogin = () => {
    this.setState({
      Refresh: 1
    })
  }


  render() {
    const { classes } = this.props;

    return (

      <BrowserRouter>

        <div className="App">
          {/* {!this.props.logedInUser&&this.props.history.push("/")} */}
          <Grid container spacing={24}>

            <Grid item xs={3}>

              {this.props.logedInUser.role != "admin" && (
                <Paper className={classes.paper}><Cart goToCheckout={this.goToCheckout} /></Paper>
              )}
               {this.props.logedInUser.role == "admin" && (
                <Paper className={classes.paper}><Admin/></Paper>
              )}


            </Grid>
            <Grid item xs={9}>

              <Paper className={classes.paper}>
                <Header goToLogin={this.goToLogin} />
                <Route path="/main/checkout" component={CheckoutComponent} />
                <Route path="/main/:name" component={ProductsComponent} />
              </Paper>
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
        getCartItems: allActions.getCartItems,


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
