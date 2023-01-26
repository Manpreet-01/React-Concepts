import React from "react"
import "../styles/App.css"
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./Home"
import About from "./About"

const navLinkStyles=({isActive})=>{
	return {
		fontWeight: isActive ? "bold" : "normal",
		textDecoration: isActive ? "none" : "underline"
	}
}

const Navbar = () => {
  return (
		<nav>
			<NavLink style={navLinkStyles} to='/'>Home</NavLink>
			<NavLink style={navLinkStyles} to='contactus'>ContactUs</NavLink>
			<NavLink style={navLinkStyles} to='about'>About</NavLink>
		</nav>
	);
};
export default Navbar;