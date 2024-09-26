import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MyPageNav from "../components/MyPageNav";
import WhiteHeader from "../components/WhiteHeader";
import { ContextSystem } from "../functions/MyContext";
import "./Interest.css";

export default function Interest() {
	const navigate = useNavigate();
	const { get, set } = useContext(ContextSystem);

	return (
		<div className="Interest">
			<WhiteHeader />
			<Main>
				<p className="interest-title">관심 상품</p>
				<div className="interest">
					<MyPageNav />

					<div className="interest-main">
						<div className="interest-small-title">관심 상품 목록</div>

						<div className="interest-th">
							<div className="interest-th-box" style={{ width: 77 }}></div>
							<div className="interest-th-box" style={{ width: 711 }}>상품정보</div>
							<div className="interest-th-box" style={{ width: 120 }}>판매가</div>
							<div className="interest-th-box" style={{ width: 195 }}>선택</div>
						</div>


						<div className="interest-function-container">
							<p>선택상품을</p>
							<button>장바구니에 담기</button>
							<button>삭제</button>

							<p style={{ marginLeft: "auto" }}>전체상품을</p>
							<button>장바구니에 담기</button>
							<button>삭제</button>
						</div>
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}