import CartTable from "../components/CartTable";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./Cart.css";

export default function Cart() {
	return (
		<div className="cart">
			<WhiteHeader />
			<Main>
				<p style={{ fontSize: 40, fontWeight: "bold", marginTop: 213, display: "flex", justifyContent: "center" }}>
					장바구니
				</p>

				<div className="cart-small-title">
					상품목록
				</div>

				<div className="cart-key-container">
					<div className="cart-key-box" style={{ width: 52 }}>

					</div>
					<div className="cart-key-box" style={{ width: 169 }}>
						이미지
					</div>
					<div className="cart-key-box" style={{ width: 379 }}>
						상품정보
					</div>
					<div className="cart-key-box" style={{ width: 128 }}>
						수량
					</div>
					<div className="cart-key-box" style={{ width: 110 }}>
						상품구매금액
					</div>
					<div className="cart-key-box" style={{ width: 88 }}>
						할인금액
					</div>
					<div className="cart-key-box" style={{ width: 88 }}>
						적립금
					</div>
					<div className="cart-key-box" style={{ width: 85 }}>
						배송구분
					</div>
					<div className="cart-key-box" style={{ width: 98 }}>
						배송비
					</div>
					<div className="cart-key-box" style={{ width: 152 }}>
						선택
					</div>
				</div>

				<CartTable />

				<div className="cart-function-container">
					<div className="cart-funcion-section">
						<p style={{ fontSize: 14, fontWeight: "bold" }}>선택상품을</p>
						<button className="cart-small-button">삭제하기</button>
					</div>

					<div className="cart-funcion-section">
						<button className="cart-small-button" style={{ width: 130 }}>장바구니 비우기</button>
						<button className="cart-small-button">견적서 출력</button>
					</div>
				</div>

				<div className="cart-small-title">
					이용안내
				</div>

				<div style={{ width: 1340, margin: "0px auto" }}>
					df
				</div>
			</Main>
			<Footer />
		</div>
	)
}