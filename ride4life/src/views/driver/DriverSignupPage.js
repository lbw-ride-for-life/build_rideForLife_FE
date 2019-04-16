import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { signup_driver } from '../../actions';
import PinkButton from "../../components/Button/PinkButton";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import GridItem from "../../components/Grid/GridItem";
import CardHeader from "../../components/Card/CardHeader";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
// import image from "assets/img/bg7.jpg";
import Button from "../../components/CustomButtons/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import CardBody from "../../components/Card/CardBody";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Phone from "@material-ui/icons/Phone";
import Face from "@material-ui/icons/Face";
import Place from "@material-ui/icons/Place";

import {Link} from "react-router-dom";

class DriverSingupPage extends React.Component {
  state = {
    profile: {
      username: 'eweng',
      password: '0000',
      phone:'6509522257',
      location:'CA',
       email: 'eweng@gmail.com',
    
    }
  };
  
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  handleChange = e => {
    this.setState({
        profile: {
        ...this.state.profile,
        [e.target.name]: e.target.value
      }
    });
  };
  
  signupDriver = e => {
    console.log('signup_driver clicked')
    e.preventDefault();
    this.props.signup_driver(this.state.profile).then(() => {
      console.log('his.props.login(this.state.credentials).then')
      this.props.history.push('/driver-login');
    });
  };
  
  render() {
    const { classes } = this.props;
    return (
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form} onSubmit={this.signupDriver}>
                    <CardHeader
                        color="info"
                        signup
                        className={classes.cardHeader}
                    >
                      <h2 className={classes.cardTitle}>Driver Sign Up</h2>
                      <div className={classes.socialLine}>
                        <Button
                            justIcon
                            color="transparent"
                            className={classes.iconButtons}
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                            justIcon
                            color="transparent"
                            className={classes.iconButtons}
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                            justIcon
                            color="transparent"
                            className={classes.iconButtons}
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus-g" />
                        </Button>
                      </div>
                    </CardHeader>
                    <p
                        className={`${classes.description} ${classes.textCenter}`}
                    >
                    </p>
                    <CardBody signup>
                      <CustomInput
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Useraname",
                            type: "text",
                            value:`${this.state.profile.username}`,
                            startAdornment: (
                                <InputAdornment position="start">
                                  <Face className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          id="password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Password",
                            type: "password",
                             value:`${this.state.profile.password}`,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          id="cellphone"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                             value:`${this.state.profile.phone}`,
                            placeholder: "Cell phone",
                            type: "phone",
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          id="location"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                              value:`${this.state.profile.location}`,
                            placeholder: "Location",
                            type: "option",
                            startAdornment: (
                                <InputAdornment position="start">
                                  <Place className={classes.inputIconsColor}/>
                                </InputAdornment>
                            )
                          }}
                      />
                      <CustomInput
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Email...",
                            type: "email",
                             value:`${this.state.profile.email}`,
    
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                          }}
                      />
                    
                    </CardBody>
                    <div className={classes.textCenter}>
                      <PinkButton type="submit" >
                        {this.props.loggingIn
                            ? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                            : "Sign up"
                        }
                      </PinkButton>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}
const mapStateToProps = ({driverReducer}) => (
    {
        driverSignupStarted:driverReducer.driverSignupStarted
    }
)

export default connect(
    mapStateToProps,
    { signup_driver }
)(withStyles(loginPageStyle)(DriverSingupPage));