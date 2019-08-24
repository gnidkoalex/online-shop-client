import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { MenuItem, Navbar, Nav, NavItem } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { isPromiseAlike } from "q";
import Login from "./login"
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';


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

    this.state = {
      logOutFlag: 0

    }
  }

  componentWillReceiveProps(nextProps) {

    // console.log("im next from header")
    // console.log(nextProps)
    // if(nextProps.logedInUser.session){
    //   //steel logrd in 
    // }else{
    //   this.props.history.push("/")

    // }
  }
  componentDidMount() {

  }



  render() {

    return (

      <div>


        <Navbar>
          {/* <Navbar.Header> */}
          <Navbar.Brand>
            <Link to="/main/Meat and fish"> Meat and fish</Link>
          </Navbar.Brand>
          &nbsp; | &nbsp;
            <Navbar.Brand>
            <Link to="/main/Drinks"> Drinks </Link>
          </Navbar.Brand>
          &nbsp; | &nbsp;
            <Navbar.Brand>
            <Link to="/main/Milk and eggs"> Milk and eggs </Link>
          </Navbar.Brand>
          &nbsp; | &nbsp;
            <Navbar.Brand>
            <Link to="/main/Vegetables and fruits"> Vegetables and fruits </Link>
          </Navbar.Brand>
          <div>
            hey {this.props.logedInUser.name}
          </div>



          <Button size="small" color="primary" onClick={() => {
            localStorage.removeItem("session")
            localStorage.removeItem("user")
            let session = this.props.logedInUser.session
            this.props.actions.logOut(session)
            this.props.goToLogin()







          }}>log out</Button>



        </Navbar>


      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    logedInUser: state.logedInUser || {}

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        logOut: allActions.logOut,




      },
      dispatch
    )
  };

}

export default withStyles(styles)(
  connect(
    mapStateToProps,//read from state
    //pass to state
    mapDispatchToProps
  )(Header)
);