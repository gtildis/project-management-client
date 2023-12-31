/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/Homepage"; // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage"; //  <== IMPORT

function App() {
	return (
		<div className="App">
			{/* Below: ADD <Navbar>, <Routes> & <Route> */}
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectListPage />} />
			</Routes>
		</div>
	);
}

export default App;
