import { Link } from "react-router-dom";
import "./MyPageNav.css";

export default function MyPageNav() {
	return (
		<div className="MyPageNav">
			<div className="mpn-title">
				<Link to={"/mypage"}><p>My Page</p></Link>
			</div>

			<div className="mpn-menu">
				<Link to={"/order"}><p>주문 내역 조회</p></Link>
			</div>

			<div className="mpn-menu">
				<p>관심 상품</p>
			</div>

			<div className="mpn-menu">
				<p>회원 정보 수정</p>
			</div>

			<div className="mpn-menu">
				<p>접수/문의 내역</p>
			</div>
		</div>
	)
}