import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Join from "./pages/Join";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/join" element={<Join />} />
			</Routes>
		</div>
	);
}