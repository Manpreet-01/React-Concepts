import React from "react"
import "../styles/App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import ContactUs from "./ContactUs"
import About from "./About"
import OrderSummary from "./OrderSummary"
import Navbar from "./Navbar"

//Router

const App = () => {
  return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path='about' element={<About />} />
				<Route path='order-summary' element={<OrderSummary />} />
			</Routes>
		</div>
	);
};
export default App;