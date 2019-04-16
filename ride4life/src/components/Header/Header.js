import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {connect} from 'react-redux'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import ChildCare from "@material-ui/icons/ChildCare";
import TimeToLeave from "@material-ui/icons/TimeToLeave";
// core components
import headerStyle from "../../assets/jss/material-kit-pro-react/components/headerStyle.jsx";
import {PrivateRoute} from "../PrivateRoute";
import logo from "assets/img/safe_logo.png";


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
		this.headerColorChange = this.headerColorChange.bind(this);
	}
	handleDrawerToggle() {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	}
	componentDidMount() {
		if (this.props.changeColorOnScroll) {
			window.addEventListener("scroll", this.headerColorChange);
		}
	}
	headerColorChange() {
		const { classes, color, changeColorOnScroll } = this.props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
			.getElementsByTagName("header")[0]
			.classList.remove(classes[color]);
			document.body
			.getElementsByTagName("header")[0]
			.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
			.getElementsByTagName("header")[0]
			.classList.add(classes[color]);
			document.body
			.getElementsByTagName("header")[0]
			.classList.remove(classes[changeColorOnScroll.color]);
		}
	}
	componentWillUnmount() {
		if (this.props.changeColorOnScroll) {
			window.removeEventListener("scroll", this.headerColorChange);
		}
	}
	render() {
		const { classes, color, links, brand, fixed, absolute } = this.props;
		const appBarClasses = classNames({
			[classes.appBar]: true,
			[classes[color]]: color,
			[classes.absolute]: absolute,
			[classes.fixed]: fixed,
			
		});
		return (
			<AppBar className={appBarClasses}>
				<Toolbar className={classes.container}>
						<Link className={classes.titleNoUnder}
								to="/">
							<div className={classes.logoContainer}>
								<img src={logo} />
							</div>
						</Link>
						<IconButton className={classes.titleNoUnder}>
							<ChildCare/>
							<Link className={classes.titleNoUnder}
								  display="none"
								  to="/rider-login">Login</Link>
						</IconButton>
						<IconButton className={classes.titleNoUnder}>
							<TimeToLeave/>
							<Link className={classes.titleNoUnder}
								  display={{ xs: 'none', sm: 'block' }}
									to="/driver-login">Driver Login</Link>
						</IconButton>
					<Hidden smDown implementation="css" className={classes.hidden}>
						<div className={classes.collapse}>{links}</div>
					</Hidden>
					<Hidden mdUp>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerToggle}
						>
							<Menu />
						</IconButton>
					</Hidden>
				</Toolbar>
				<Hidden mdUp implementation="css">
					<Drawer
						variant="temporary"
						anchor={"right"}
						open={this.state.mobileOpen}
						classes={{
							paper: classes.drawerPaper
						}}
						onClose={this.handleDrawerToggle}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.closeButtonDrawer}
						>
							<Close />
						</IconButton>
						<div className={classes.appResponsive}>{links}</div>
					</Drawer>
				</Hidden>
			</AppBar>
		);
	}
}

Header.defaultProp = {
	color: "white"
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"transparent",
		"white",
		"rose",
		"dark"
	]),
	links: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// this.props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// this.props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"info",
			"success",
			"warning",
			"danger",
			"transparent",
			"white",
			"rose",
			"dark"
		]).isRequired
	})
};

export default connect(null, {})(withStyles(headerStyle)(Header));

