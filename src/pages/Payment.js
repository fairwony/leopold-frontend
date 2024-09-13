import { useState } from "react";
import PaymentContent from "../components/PaymentContent";
import PaymentHeader from "../components/PaymentHeader";
import PaymentProductTable from "../components/PaymentProductTable";
import DaumPostcode from "../functions/DaumPostcode";
import "./Payment.css";

export default function Payment() {

	const [addrSync, setAddrSync] = useState("sync");
	const [isMyself, setIsMyself] = useState(false);

	function handleChangeMsgSelect(e) {
		if (e.target.value === "myself") {
			setIsMyself(true);
		} else {
			setIsMyself(false);
		}
	}

	return (
		<div className="payment">
			<PaymentHeader />


			<PaymentContent title="상품수령">

			</PaymentContent>


			<PaymentContent title="배송지">
				<div style={{ display: "flex" }}>
					<div className="payment-recent-box">최근 배송지</div>
					<div className="payment-write-myself">직접 입력</div>
				</div>

				<div className="payment-select-addr-sync">
					<div>
						<input type="radio" value="sync" checked={addrSync === "sync"}
							onChange={(e) => { setAddrSync(e.target.value) }} id="sync-yes" />
						<label style={{ marginLeft: 9 }} for="sync-yes">회원 정보와 동일</label>
					</div>

					<div>
						<input type="radio" value="new" checked={addrSync === "new"}
							onChange={(e) => { setAddrSync(e.target.value) }} id="sync-no" />
						<label style={{ marginLeft: 9 }} for="sync-no">새로운 배송지</label>
					</div>
				</div>

				<div className="payment-address-container">
					<div className="payment-addr-line">
						<div className="payment-addr-key">받는사람</div>
						<input className="payment-addr-input-1" />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">주소</div>
						<div className="payment-addr-line">
							<input className="payment-addr-input-1" style={{ width: 160 }}
								placeholder="우편주소" readOnly />
							<DaumPostcode />
						</div>
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key"></div>
						<input className="payment-addr-input-1"
							placeholder="기본 주소" readOnly />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key"></div>
						<input className="payment-addr-input-1"
							placeholder="나머지 주소" />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">휴대전화</div>
						<input className="payment-addr-input-2" />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2" />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2" />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">일반전화</div>
						<input className="payment-addr-input-2" />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2" />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2" />
					</div>
				</div>

				<div className="payment-msg-wrapper">
					<select className="payment-msg-select" onChange={handleChangeMsgSelect}>
						<option>메시지 선택 (선택사항)</option>
						<option value="msg-1">배송 전에 미리 연락바랍니다.</option>
						<option value="msg-2">부재 시 경비실에 맡겨 주세요.</option>
						<option value="msg-3">부재 시 문 앞에 놓아 주세요.</option>
						<option value="msg-4">빠른 배송 부탁드립니다.</option>
						<option value="msg-5">택배함에 보관해 주세요.</option>
						<option value="myself">직접입력</option>
					</select>
				</div>

				{isMyself ? <input className="payment-msg-myself" /> : undefined}
			</PaymentContent>


			<PaymentContent title="주문상품">
				<PaymentProductTable />
				<PaymentProductTable />
			</PaymentContent>


			<PaymentContent title="보유 적립금 사용">
				<div style={{ display: "flex", gap: 7, paddingLeft: 20 }}>
					<input className="payment-point-input" />
					<button className="payment-point-btn">전액 사용</button>
				</div>

				<div className="payment-point-wrapper">보유 포인트: 1,050P</div>



			</PaymentContent>


			<PaymentContent title="결제정보">
				<div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
					<div className="payment-info-row">
						<p>주문상품</p>
						<p className="payment-info-value">178,000원</p>
					</div>

					<div className="payment-info-row">
						<p>배송비</p>
						<p className="payment-info-value">+3,000원</p>
					</div>

					<div className="payment-info-row">
						<p>적립금</p>
						<p className="payment-info-value">-1,050원</p>
					</div>

					<div className="payment-info-row">
						<p>할인/부가결제</p>
						<p className="payment-info-value" style={{ color: "#DC2C2C" }}>-0원</p>
					</div>
				</div>

				<div className="payment-final-price-wrapper">
					<p>최종결제금액</p>
					<p style={{ fontSize: 22 }}>179,950원</p>
				</div>
			</PaymentContent>


			<PaymentContent title="결제수단">
				<div className="payment-select-method-wrapper">
					<div className="payment-method-box-1">결제수단 선택</div>
					<div className="payment-method-box-2">신용카드</div>
					<div className="payment-method-box-3">무통장입금</div>
					<div className="payment-method-box-4">
						<div style={{ display: "flex", alignItems: "center" }}>
							<div className="payment-bank-key">입금은행</div>
							<select className="payment-bank-value">
								<option>:::선택해주세요:::</option>
								<option>신한은행 110-234-5676890</option>
							</select>
						</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div className="payment-bank-key">입금자명</div>
							<input className="payment-bank-value" />
						</div>
					</div>
				</div>
			</PaymentContent>


			<PaymentContent title="적립혜택">
				<div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
					<div className="payment-info-row">
						<p>회원 적립금</p>
						<p className="payment-info-value">1,850원</p>
					</div>
				</div>

				<div className="payment-final-price-wrapper">
					<p>적립예정금액</p>
					<p>1,850원</p>
				</div>
			</PaymentContent>
		</div>
	)
}