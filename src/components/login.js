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
        }

    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                 <h1>log in</h1>

                <div className={classes.margin}  style={{marginLeft: 250}}>
                       

                    <Grid container spacing={0} alignItems="flex-end">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        
        
                    <TextField id="userName" label="user name" value={this.state.userName} onChange={e=>{this.setState({userName:e.currentTarget.value})}} />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    
    
                    <TextField id="password" type="password"  label="password"value={this.state.password} onChange={e=>{this.setState({password:e.currentTarget.value})}} />



                    </Grid>
                    <Grid container spacing={0} alignItems="flex-end">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;
                       
        
        
                        <Button size="small" color="primary" onClick={()=>{
                    if(this.state.userName&&this.state.password){
                      this.props.actions.userLogin(this.state.userName,this.state.password);
                   
                    }else{
                      alert("missing params")
                    }
                    
                  }}>
                  
                    Log in
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{
                      this.props.history.push("/register")
                    
                    
                  }}>
                  
                    Register
                  </Button>


                    </Grid>



                </div>
                </div>
               


        );
    }
}
function mapStateToProps(state) {
    return {
        logedInUser:state.logedInUser||{},

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {

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

