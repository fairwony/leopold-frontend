import { Route, Routes } from "react-router-dom";
import AS from "./pages/AS";
import Download from "./pages/Download";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Review from "./pages/Review";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/download" element={<Download />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/as" element={<AS />} />
				<Route path="/review" element={<Review />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}