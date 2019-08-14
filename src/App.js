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
    this.props.actions.getProducts();
    this.props.actions.getCategories();
  }
  componentDidUpdate() {
    console.log(this.props.products);
  }

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>

        <div className="App">
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Paper className={classes.paper}><Cart /></Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}><Header />
                <Switch>
                  <Route path="/login" component={LoginComponent} />
                  <Route path="/:name" component={ProductsComponent} />

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


