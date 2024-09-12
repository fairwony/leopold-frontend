import { Route, Routes } from "react-router-dom";
import AS from "./pages/AS";
import AsReception from "./pages/AsReception";
import Cart from "./pages/Cart";
import Download from "./pages/Download";
import DownloadDetail from "./pages/DownloadDetail";
import FAQ from "./pages/FAQ";
import ForgotId from "./pages/ForgotId";
import ForgotPs from "./pages/ForgotPs";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Review from "./pages/Review";
import ReviewDetail from "./pages/ReviewDetail";
import Shopping from "./pages/Shopping";
import ShoppingDetail from "./pages/ShoppingDetail";
import Support from "./pages/Support";
import ReviewNotice from "./pages/ReviewNotice";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/notice/detail" element={<NoticeDetail />} />
				<Route path="/download" element={<Download />} />
				<Route path="/download/detail" element={<DownloadDetail />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/as" element={<AS />} />
				<Route path="/asReception" element={<AsReception />} />
				<Route path="/review" element={<Review />} />
				<Route path="/review/notice" element={<ReviewNotice />} />
				<Route path="/review/detail" element={<ReviewDetail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgotId" element={<ForgotId />} />
				<Route path="/forgotPs" element={<ForgotPs />} />
				<Route path="/join" element={<Join />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/order" element={<Order />} />
				<Route path="/order/detail" element={<OrderDetail />} />
				<Route path="/shopping" element={<Shopping />} />
				<Route path="/shopping/detail" element={<ShoppingDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/support" element={<Support />} />
			</Routes>
		</div>
	);
}