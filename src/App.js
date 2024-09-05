import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notice from "./pages/Notice";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notice" element={<Notice />} />
			</Routes>
		</div>
	);
}