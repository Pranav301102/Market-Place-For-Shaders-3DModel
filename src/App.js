import "./App.css";

import Home from "./Pages/Home/Index";
import Navbar from "./Component/Navbar/Navbar";
import LoginPage from "./Pages/Login/Index";
import SignupPage from "./Pages/Signup/Index";
import Model from "./Pages/Model/Index";
import Shaders from "./Pages/Shaders/shaders";
import PriceCard from "./Component/PricingCard/PriceCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import ModelScene from "./Component/Model/Index";
import ShaderModel from "./Component/Shader/Shader";
import Aboutus from "./Component/AboutUS/aboutus";
import Sell from "./Pages/Sell";
import OwnedPage from "./Pages/Owned";

function App() {
	return (
		<MantineProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<LoginPage />} />
					{/* <Route exact path="/PriceCard" element={<Aboutus/>} /> */}
					<Route exact path="/signup" element={<SignupPage />} />
					<Route exact path="/shader" element={<Shaders />} />
					<Route exact path="/model" element={<Model />} />
					<Route exact path="/3D" element={<ModelScene />} />
					<Route exact path="/sh" element={<ShaderModel />} />
					<Route exact path="/sell" element={<Sell />} />
					<Route exact path="/owned" element={<OwnedPage />} />
				</Routes>
			</Router>
		</MantineProvider>
	);
}

export default App;
