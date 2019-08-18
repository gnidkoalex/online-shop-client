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
    if(localStorage.getItem("session")){
        console.log("no push")
    }
    else{console.log("pushhhh")
this.props.history.push("/")}
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
      logedInUser:state.logedInUser||{}

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
Main.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));


