import React from "react"
import "../styles/App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import ContactUs from "./ContactUs"
import About from "./About"
import OrderSummary from "./OrderSummary"
import Navbar from "./Navbar"
import PageNotFound from "./PageNotFound"

//Router

const App = () => {
  return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/contactus" element={<ContactUs />} />
				<Route exact path='about' element={<About />} />
				<Route exact path='order-summary' element={<OrderSummary />} />
				<Route exact path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
};
export default App;