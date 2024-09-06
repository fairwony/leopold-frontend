import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Review from "./pages/Review";
import Download from "./pages/Download";
import FAQ from "./pages/FAQ";
import AS from "./pages/AS";

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

			</Routes>
		</div>
	);
}