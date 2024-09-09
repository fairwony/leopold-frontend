import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./OrderDetail.css";

export default function OrderDetail() {
	return (
		<div className="OrderDetail">
			<WhiteHeader />
			<Main>
				<p className="od-title">주문 상세 조회</p>

				<div className="od">
					<div className="od-nav">
						<div className="od-nav-title">My Page</div>
						<div className="od-nav-menu">주문 내역 조회</div>
						<div className="od-nav-menu">관심 상품</div>
						<div className="od-nav-menu">회원 정보 수정</div>
						<div className="od-nav-menu">접수/문의 내역</div>
					</div>

					<div className="od-main">
						<div className="od-title-1">주문정보</div>

						<tr>
							<td className="od-order-info-key">주문번호</td>
							<td className="od-order-info-value">20240903-0000021</td>
						</tr>
						<tr>
							<td className="od-order-info-key">주문일자</td>
							<td className="od-order-info-value">2024-09-03 09:26:57</td>
						</tr>
						<tr>
							<td className="od-order-info-key">주문자</td>
							<td className="od-order-info-value">권혁민</td>
						</tr>
						<tr>
							<td className="od-order-info-key">주문처리상태</td>
							<td className="od-order-info-value">
								<p>입금전</p>
								<button>주문취소</button>
							</td>
						</tr>

						<div className="od-title-2">결제정보</div>

						<tr>
							<td className="od-order-info-key">총 주문금액</td>
							<td className="od-order-info-value" style={{ fontWeight: "bold" }}>181,000원</td>
						</tr>
						<tr>
							<td className="od-order-info-key">주문처리상태</td>
							<td className="od-order-info-value">
								<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
									<p style={{ fontWeight: "bold" }}>무통장입금</p>
									<p>입금자: 권혁민, 계좌번호: 국민은행 477401-01-100878 (레오폴드(주))</p>
								</div>
							</td>
						</tr>

						<div className="od-title-2">주문 상품 정보</div>

						<div className="od-recent-title">
							<div className="od-recent-title-box" style={{ width: "652px" }}>
								상품정보
							</div>

							<div className="od-recent-title-box" style={{ width: "70px" }}>
								수량
							</div>

							<div className="od-recent-title-box" style={{ width: "120px" }}>
								주문금액
							</div>

							<div className="od-recent-title-box" style={{ width: "120px" }}>
								주문상태
							</div>

							<div className="od-recent-title-box" style={{ width: "141px" }}>
								취소/교환/반품
							</div>
						</div>

						
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}