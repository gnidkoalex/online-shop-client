import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { allActions } from '../redux/index';

import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"; import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';




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



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {userName:"",
        password:"",


        };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.logedInUser!={}){
            this.props.history.push("/main")
        }else if(localStorage.getItem("session")!=""){
            console.log("need this")

        }

    }
    componentDidMount() {
        

    }
    componentDidUpdate() {

    }


    render() {
        const { classes } = this.props;
        return (
            

                <div className={classes.margin}>
                    <Grid container spacing={0} alignItems="flex-end">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        
        
                    <TextField id="userName" label="user name" value={this.state.userName} onChange={e=>{this.setState({userName:e.currentTarget.value})}} />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    
    
                    <TextField id="password" label="password"value={this.state.password} onChange={e=>{this.setState({password:e.currentTarget.value})}} />



                    </Grid>
                    <Grid container spacing={0} alignItems="flex-end">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;
                       
        
        
                        <Button size="small" color="primary" onClick={()=>{
                    if(this.state.userName&&this.state.password){
                      this.props.actions.userLogin(this.state.userName,this.state.password);
                    //   this.props.history.push("/main")
                    }else{
                      alert("missing params")
                    }
                    
                  }}>
                  
                    Log in
                  </Button>


                    </Grid>



                </div>
               


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
                // getProducts:allActions.getProducts
                // addToCart: allActions.addToCart
                userLogin:allActions.userLogin

            },
            dispatch
        )
    };

}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));

