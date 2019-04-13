import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';


class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    
  }
  componentDidUpdate(){
   
  }

  render() {
    return (
      
        <div>
            <h1>kaki</h1>
         
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
        getProducts:allActions.getProducts

      },
      dispatch
    )
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
