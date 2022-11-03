import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Footer />}>
					<Route index element={<Home />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
