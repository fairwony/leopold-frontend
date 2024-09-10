import Footer from "../components/Footer";
import Main from "../components/Main";
import MyPageNav from "../components/MyPageNav";
import OrderDetailTable from "../components/OrderDetailTable";
import WhiteHeader from "../components/WhiteHeader";
import "./OrderDetail.css";

export default function OrderDetail() {
	return (
		<div className="OrderDetail">
			<WhiteHeader />
			<Main>
				<p className="od-title">주문 상세 조회</p>

				<div className="od">
					<MyPageNav />

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
							<td className="od-order-info-value" style={{ display: "flex", gap: "15px" }}>
								<p>입금전</p>
								<button className="od-cancel-btn">주문취소</button>
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
								<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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

						<OrderDetailTable />
						<OrderDetailTable />

						<div className="od-total-box">
							<p>상품구매금액 178,000 + 배송비: 3000 =&nbsp;</p>
							<p style={{ fontSize: "18px", fontWeight: "bold" }}>합계 181,000원</p>
						</div>

						<div className="od-title-2">주문정보</div>

						<tr>
							<td className="od-order-info-key">받으시는 분</td>
							<td className="od-order-info-value">권혁민</td>
						</tr>
						<tr>
							<td className="od-order-info-key">우편번호</td>
							<td className="od-order-info-value">40205</td>
						</tr>
						<tr>
							<td className="od-order-info-key">주소</td>
							<td className="od-order-info-value">경북 울릉군 북면 현포2길 121 울릉도독도해양자원연구센터 B동 101호</td>
						</tr>
						<tr>
							<td className="od-order-info-key">일반전화</td>
							<td className="od-order-info-value">02-428-1526</td>
						</tr>
						<tr>
							<td className="od-order-info-key">휴대전화</td>
							<td className="od-order-info-value">010-3002-0014</td>
						</tr>
						<tr>
							<td className="od-order-info-key">배송메시지</td>
							<td className="od-order-info-value">부재 시, 문 앞에 두고 가주세요.</td>
						</tr>
						<tr>
							<td className="od-order-info-key">배송업체</td>
							<td className="od-order-info-value">우체국택배</td>
						</tr>

						<div className="od-title-2">이용안내</div>

						<p className="od-intro-p1" style={{ marginTop: 24 }}>신용카드매출전표 발행 안내</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>신용카드 결제는 사용하는 PG사 명의로 발행됩니다.</p>

						<p className="od-intro-p1" style={{ marginTop: 40 }}>부가가치세법 변경에 따른 신용카드매출전표 및 세금계산서 변경 안내</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>변경된 부가가치세법에 의거, 2004.7.1 이후 신용카드로 결제하신 주문에 대해서는 세금계산서 발행이 불가하며 신용카드매출전표로 부가가치세 신고를 하셔야 합니다.(부가가치세법 시행령 57조)</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>상기 부가가치세법 변경내용에 따라 신용카드 이외의 결제건에 대해서만 세금계산서 발행이 가능함을 양지하여 주시기 바랍니다.</p>

						<p className="od-intro-p1" style={{ marginTop: 40 }}>현금영수증 이용안내</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>현금영수증은 1원 이상의 현금성거래(무통장입금, 실시간계좌이체, 에스크로, 예치금)에 대해 발행이 됩니다.</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>현금영수증 발행 금액에는 배송비는 포함되고, 적립금사용액은 포함되지 않습니다.</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>발행신청 기간제한 현금영수증은 입금확인일로 부터 48시간안에 발행을 해야 합니다.</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>현금영수증 발행 취소의 경우는 시간 제한이 없습니다. (국세청의 정책에 따라 변경 될 수 있습니다.)</p>
						<p className="od-intro-p2" style={{ marginTop: 15 }}>현금영수증이나 세금계산서 중 하나만 발행 가능 합니다.</p>

						<div className="od-blank-1"></div>
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}