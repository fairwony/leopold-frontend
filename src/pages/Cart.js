import { useState } from "react";
import CartTable from "../components/CartTable";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./Cart.css";

export default function Cart() {
	const [selectList, setSelectList] = useState([]);

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

				<CartTable selectList={selectList} setSelectList={setSelectList} />

				<div className="cart-function-container">
					<div className="cart-funcion-section">
						<p style={{ fontSize: 14, fontWeight: "bold" }}>선택상품을</p>
						<button className="cart-small-button"
							onClick={() => { console.log(selectList) }}>삭제하기</button>
					</div>

					<div className="cart-funcion-section">
						<button className="cart-small-button" style={{ width: 130 }}>장바구니 비우기</button>
						<button className="cart-small-button">견적서 출력</button>
					</div>
				</div>

				<div className="cart-total-table-th">
					<div className="cart-tt-box" style={{ width: 227 }}>총 상품금액</div>
					<div className="cart-tt-box" style={{ width: 256 }}></div>
					<div className="cart-tt-box" style={{ width: 857 }}>결제예정금액</div>
				</div>

				<div className="cart-total-table-td">
					<div className="cart-tt-box" style={{ width: 227 }}>178,000원</div>
					<div className="cart-tt-box" style={{ width: 256 }}></div>
					<div className="cart-tt-box" style={{ width: 857 }}>= 178,000원</div>
				</div>

				<div className="cart-small-title">
					이용안내
				</div>

				<div style={{ width: 1340, margin: "0px auto" }}>
					<p className="cart-intro-title">장바구니 이용안내</p>
					<p className="cart-intro-content">
						1. 해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.
						<br />2. 해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.
						<br />3. 선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.
						<br />4. [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.
						<br />5. 장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.
						<br />6. 파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.
					</p>

					<p className="cart-intro-title">무이자할부 이용안내</p>
					<p className="cart-intro-content">
						1. 상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
						<br />2. [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.
						<br />3. 단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.
						<br />4. 무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다.실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다.
					</p>
				</div>
			</Main>
			<Footer />
		</div>
	)
}