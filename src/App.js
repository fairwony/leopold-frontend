import { Route, Routes } from "react-router-dom";
import AS from "./pages/AS";
import Download from "./pages/Download";
import FAQ from "./pages/FAQ";
import ForgotId from "./pages/ForgotId";
import ForgotPs from "./pages/ForgotPs";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Notice from "./pages/Notice";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Review from "./pages/Review";
import AsReception from "./components/AsReception";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/download" element={<Download />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/as" element={<AS />} />
				<Route path="/asReception" element={<AsReception />} />
				<Route path="/review" element={<Review />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgotId" element={<ForgotId />} />
				<Route path="/forgotPs" element={<ForgotPs />} />
				<Route path="/join" element={<Join />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/order" element={<Order />} />
				<Route path="/order/detail" element={<OrderDetail />} />
			</Routes>
		</div>
	);
}