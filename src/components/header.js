import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { MenuItem, Navbar, Nav, NavItem } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { isPromiseAlike } from "q";
import Login from "./login"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { }
  }

  componentWillReceiveProps(nextProps){
      // console.log(this.props.isAuth)
    // this.setState({
    //   currentUser: nextProps.currentUser,
    //   isAuth: nextProps.isAuth
    // });
    
  }
  

  render() {

  
 
    return (
      <div>
        <Navbar>
          {/* <Navbar.Header> */}
            <Navbar.Brand>
            <Link to="/Meat and fish"> Meat and fish</Link>
            </Navbar.Brand>
            &nbsp; | &nbsp; 
            <Navbar.Brand>
              <Link to="/Drinks"> Drinks </Link>
            </Navbar.Brand>  
            &nbsp; | &nbsp;
            <Navbar.Brand>
              <Link to="/Milk and eggs"> Milk and eggs </Link>
            </Navbar.Brand>
            &nbsp; | &nbsp;
            <Navbar.Brand>
              <Link to="/Vegetables and fruits"> Vegetables and fruits </Link>
            </Navbar.Brand> 
            <Navbar.Brand>
              <Link to="/login"> login </Link>
            </Navbar.Brand> 
        </Navbar>
        
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
 

  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,//read from state
    //pass to state
  )(Header)
);