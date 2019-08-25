import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from './redux';
import ProductsComponent from "./components/products"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./components/header";
import Cart from "./components/productlist";
import LoginComponent from "./components/login";
import MainComponent from "./components/main";
import registerComponent from "./components/register";








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


class App extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    // this.props.actions.getProducts();
    // this.props.actions.getCategories();
    if(localStorage.getItem("session")){
      //verify
    }else{
      
    }
  }
  componentDidUpdate() {
    console.log(this.props.products);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <BrowserRouter>

        <div className="App">
          <Switch>

          <Route exact path="/" component={LoginComponent} />
          <Route  path="/main" component={MainComponent} />
          <Route  path="/register" component={registerComponent} />
        
          
          
          
          </Switch>

        </div>
      </BrowserRouter>
      
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
        getProducts: allActions.getProducts,
        getCategories: allActions.getCategories

      },
      dispatch
    )
  };

}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));


