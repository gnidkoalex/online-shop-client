import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';
import 'bootstrap/dist/css/bootstrap.css';

// matireal ui 
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // categoryName: this.props.match.params.name,
      categoryName: "meat and fish"



    };

  }

  componentDidMount() {




  }

  componentWillReceiveProps(nextProps) {

    this.handeleCategoryChange(nextProps.match.params.name.toLowerCase())
    // this.getCategoryId(nextProps)
  }


  getCategoryId(categoryName) {
    let categoryNeded = categoryName
    // let categoryNeded= categoryName.match.params.name
    let categoryId = this.props.categories.filter(function (category) {
      return category.categoryName.toLowerCase() == categoryNeded.toLowerCase()
    });
    if (categoryId[0]) {
      this.props.actions.getProductsByCategory(categoryId[0])

    }

  }

  handeleCategoryChange = (category) => {
    if (category != "" && category != undefined && category != null && category.toLowerCase() != this.state.categoryName.toLowerCase()) {
      this.getCategoryId(category.toLowerCase())
      this.setState({ categoryName: category.toLowerCase() })


    }

  }




  render() {


    return (
      <div className="container">
        <h1>{this.props.match.params.name}</h1>
        <div className="row">
          {this.props.productsByCategory.map((product, index) => {
            return (
              <div
                key={index}
                style={{ display: "inline", margin: "0px" }}
                className="col-3"
              >
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    height: "150px",
                    // boxShadow: "5px 5px",
                    position: "relative"
                  }}
                >
                  <div>
                    <div>{product.productName}  </div>
                    <div>{product.price+"₪"}  </div>
                    <div>{product.image}  </div>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories || [],
    productsByCategory: state.productsByCategory || []

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProducts: allActions.getProducts,
        getCategories: allActions.getCategories,
        getProductsByCategory: allActions.getProductsByCategory

      },
      dispatch
    )
  };

}

export default withStyles(styles)
  (connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products));
