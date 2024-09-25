import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentContent from "../components/PaymentContent";
import PaymentHeader from "../components/PaymentHeader";
import PaymentProductTable from "../components/PaymentProductTable";
import DaumPostcode from "../functions/DaumPostcode";
import "./Payment.css";

export default function Payment() {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({});
	const [wishList, setWishList] = useState([]);

	const [addrSync, setAddrSync] = useState("sync");
	const [isMyself, setIsMyself] = useState(false);


	const [receiver, setReceiver] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [address, setAddress] = useState("");
	const [addressDetail, setAddressDetail] = useState("");
	const [phone1, setPhone1] = useState("");
	const [phone2, setPhone2] = useState("");
	const [phone3, setPhone3] = useState("");
	const [email, setEmail] = useState("");
	const [phoneAlt1, setPhoneAlt1] = useState("");
	const [phoneAlt2, setPhoneAlt2] = useState("");
	const [phoneAlt3, setPhoneAlt3] = useState("");
	const [message, setMessage] = useState("default");
	const [messageSelf, setMessageSelf] = useState("");
	const [account, setAccount] = useState("default");
	const [holder, setHolder] = useState("");

	const [point, setPoint] = useState('');

	const handleAddressComplete = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress += (extraAddress !== '' ? ', ' + data.buildingName : data.buildingName);
			}
			fullAddress += (extraAddress !== '' ? ' (' + extraAddress + ')' : '');
		}

		setAddress(fullAddress);
		setZipcode(data.zonecode);
		setAddressDetail("");
	};

	function handleChangeMsgSelect(e) {
		setMessage(e.target.value);
		if (e.target.value === "직접입력") {
			setIsMyself(true);
		} else {
			setIsMyself(false);
		}
	}

	useEffect(() => {
		axios.get(`http://localhost:8080/user`, { withCredentials: true })
			.then((response) => {
				console.log(response.data);
				setUserInfo(response.data);

				setReceiver(response.data.name);
				setZipcode(response.data.zipcode);
				setAddress(response.data.address);
				setAddressDetail(response.data.addressDetail);
				setPhone1(response.data.phone.split("-")[0]);
				setPhone2(response.data.phone.split("-")[1]);
				setPhone3(response.data.phone.split("-")[2]);
				setEmail(response.data.email);
				if (response.data.phoneAlt) {
					setPhoneAlt1(response.data.phoneAlt.split("-")[0]);
					setPhoneAlt2(response.data.phoneAlt.split("-")[1]);
					setPhoneAlt3(response.data.phoneAlt.split("-")[2]);
				}
			})
			.catch((error) => {
				console.log(error.response.data);
			});

		axios.get(`http://localhost:8080/wish`, { withCredentials: true })
			.then((response) => {
				if (response.data.length === 0) {
					alert("잘못된 접근입니다.");
					navigate("/");
				}
				console.log(response.data);
				setWishList(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}, []);



	function handleChangeSync(e) {
		setAddrSync(e.target.value);
		setIsMyself(false);
		setMessage("default");
		setMessageSelf("");

		if (e.target.value === "sync") {
			setReceiver(userInfo?.name);
			setZipcode(userInfo?.zipcode);
			setAddress(userInfo?.address);
			setAddressDetail(userInfo?.addressDetail);
			setPhone1(userInfo?.phone.split("-")[0]);
			setPhone2(userInfo?.phone.split("-")[1]);
			setPhone3(userInfo?.phone.split("-")[2]);
			if (userInfo?.phoneAlt) {
				setPhoneAlt1(userInfo?.phoneAlt.split("-")[0]);
				setPhoneAlt2(userInfo?.phoneAlt.split("-")[1]);
				setPhoneAlt3(userInfo?.phoneAlt.split("-")[2]);
			}
		} else {
			setReceiver("");
			setZipcode("");
			setAddress("");
			setAddressDetail("");
			setPhone1("");
			setPhone2("");
			setPhone3("");
			setPhoneAlt1("");
			setPhoneAlt2("");
			setPhoneAlt3("");
		}
	}

	const printWishTable = wishList.map((wish, index) => (
		<PaymentProductTable wish={wish} key={index} />
	));

	const priceTotalSum = wishList.reduce((sum, wish) => {
		const priceTotal = wish?.cart?.quantity * wish?.cart?.product?.price;
		return sum + priceTotal;
	}, 0);

	const discountTotalSum = wishList.reduce((sum, wish) => {
		const priceTotal = wish?.cart?.product?.price * wish?.cart?.product?.discountRate;
		return sum + priceTotal;
	}, 0);


	function handleClickOrder() {
		if (isMyself === true) setMessage(messageSelf);

		axios.post(`http://localhost:8080/order`, {
			receiver: `${receiver}`,
			receiveMethod: `우체국택배`,
			zipcode: `${zipcode}`,
			address: `${address}`,
			addressDetail: `${addressDetail}`,
			phone: `${phone1}-${phone2}-${phone3}`,
			email: `${email}`,
			message: `${message}`,
			deliverPrice: 3000,
			status: `입금대기`,
			finalPrice: `${priceTotalSum - discountTotalSum + 3000 - point}`,
			paymentMethod: `무통장입금`,
			account: `${account}`,
			holder: `${holder}`,
			point: `${point}`
		}, { withCredentials: true })
			.then((response) => {
				alert("주문 완료!");
				navigate(`/complete?orderUid=${response.data}`)
				console.log(response.data);
			})
			.catch((error) => {
				alert("에러 발생");
				console.log(error.response.data);
			});
	}


	return (
		<div className="payment">
			<PaymentHeader />


			<PaymentContent title="상품수령">

			</PaymentContent>


			<PaymentContent title="배송지">

				<div className="payment-select-addr-sync">
					<div>
						<input type="radio" value="sync" checked={addrSync === "sync"}
							onChange={handleChangeSync} id="sync-yes" />
						<label style={{ marginLeft: 9 }} for="sync-yes">회원 정보와 동일</label>
					</div>

					<div>
						<input type="radio" value="new" checked={addrSync === "new"}
							onChange={handleChangeSync} id="sync-no" />
						<label style={{ marginLeft: 9 }} for="sync-no">새로운 배송지</label>
					</div>
				</div>

				<div className="payment-address-container">
					<div className="payment-addr-line">
						<div className="payment-addr-key">받는사람</div>
						<input className="payment-addr-input-1"
							value={receiver} onChange={(e) => { setReceiver(e.target.value) }} />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">주소</div>
						<div className="payment-addr-line">
							<input className="payment-addr-input-1" style={{ width: 160 }}
								placeholder="우편번호" value={zipcode} readOnly />
							<DaumPostcode onComplete={handleAddressComplete} />
						</div>
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key"></div>
						<input className="payment-addr-input-1"
							placeholder="기본 주소" value={address} readOnly />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key"></div>
						<input className="payment-addr-input-1" value={addressDetail}
							placeholder="나머지 주소" onChange={(e) => { setAddressDetail(e.target.value) }} />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">휴대전화</div>
						<input className="payment-addr-input-2"
							value={phone1} onChange={(e) => { setPhone1(e.target.value) }} />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2"
							value={phone2} onChange={(e) => { setPhone2(e.target.value) }} />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2"
							value={phone3} onChange={(e) => { setPhone3(e.target.value) }} />
					</div>

					<div className="payment-addr-line">
						<div className="payment-addr-key">일반전화</div>
						<input className="payment-addr-input-2"
							value={phoneAlt1} onChange={(e) => { setPhoneAlt1(e.target.value) }} />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2"
							value={phoneAlt2} onChange={(e) => { setPhoneAlt2(e.target.value) }} />
						<div className="payment-addr-hyphen">-</div>
						<input className="payment-addr-input-2"
							value={phoneAlt3} onChange={(e) => { setPhoneAlt3(e.target.value) }} />
					</div>
				</div>

				<div className="payment-msg-wrapper">
					<select className="payment-msg-select" onChange={handleChangeMsgSelect} value={message}>
						<option value="default">메시지 선택 (선택사항)</option>
						<option>배송 전에 미리 연락바랍니다.</option>
						<option>부재 시 경비실에 맡겨 주세요.</option>
						<option>부재 시 문 앞에 놓아 주세요.</option>
						<option>빠른 배송 부탁드립니다.</option>
						<option>택배함에 보관해 주세요.</option>
						<option>직접입력</option>
					</select>
				</div>

				{isMyself ? <input className="payment-msg-myself" onChange={(e) => { setMessageSelf(e.target.value) }} /> : undefined}
			</PaymentContent>


			<PaymentContent title="주문상품">
				{printWishTable}
			</PaymentContent>


			<PaymentContent title="보유 적립금 사용">
				<div style={{ display: "flex", gap: 7, paddingLeft: 20 }}>
					<input className="payment-point-input" value={point}
						onChange={(e) => {
							let value = e.target.value;

							// 숫자가 아닌 문자는 제거
							value = value.replace(/\D/g, '');

							// 입력 값이 비어 있으면 상태를 빈 문자열로 설정하고 종료
							if (value === '') {
								setPoint('');
								return;
							}

							// 입력 값이 보유 포인트를 초과하면 보유 포인트로 설정
							if (parseInt(value) > userInfo?.point) {
								value = userInfo.point.toString();
							}

							// 상태 업데이트
							setPoint(value);
						}} />

					<button className="payment-point-btn"
						onClick={() => { setPoint(userInfo?.point); }}>전액 사용</button>
				</div>

				<div className="payment-point-wrapper">보유 포인트: {userInfo?.point?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</div>



			</PaymentContent>


			<PaymentContent title="결제정보">
				<div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
					<div className="payment-info-row">
						<p>주문상품</p>
						<p className="payment-info-value">{priceTotalSum
							?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
					</div>

					<div className="payment-info-row">
						<p>배송비</p>
						<p className="payment-info-value">+3,000원</p>
					</div>

					<div className="payment-info-row">
						<p>적립금</p>
						<p className="payment-info-value">-{point === "" ? 0 : point
							?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
					</div>

					<div className="payment-info-row">
						<p>할인/부가결제</p>
						<p className="payment-info-value" style={{ color: "#DC2C2C" }}>-{discountTotalSum
							?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
					</div>
				</div>

				<div className="payment-final-price-wrapper">
					<p>최종결제금액</p>
					<p style={{ fontSize: 22 }}>{(priceTotalSum - discountTotalSum + 3000 - point)
						?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
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
							<select className="payment-bank-value" onChange={(e) => { setAccount(e.target.value) }}>
								<option value="default">:::선택해주세요:::</option>
								<option>신한은행 110-234-5676890</option>
							</select>
						</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div className="payment-bank-key">입금자명</div>
							<input className="payment-bank-value" onChange={(e) => { setHolder(e.target.value) }} />
						</div>
					</div>
				</div>
			</PaymentContent>


			<PaymentContent title="적립혜택">
				<div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
					<div className="payment-info-row">
						<p>회원 적립금</p>
						<p className="payment-info-value">{((priceTotalSum - discountTotalSum + 3000 - point) * 0.01)
							?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
					</div>
				</div>

				<div className="payment-final-price-wrapper">
					<p>적립예정금액</p>
					<p>{((priceTotalSum - discountTotalSum + 3000 - point) * 0.01)
						?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
				</div>
			</PaymentContent>

			<div style={{ width: 900, backgroundColor: "white" }}>
				<div style={{
					width: 900, height: 80, backgroundColor: "white", fontSize: 18, fontWeight: "bold",
					display: "flex", justifyContent: "center", alignItems: "center"
				}}>
					주문 내용을 확인하였으며, 약관에 동의합니다.
				</div>

				<div style={{
					width: 900, height: 50, backgroundColor: "#333333", fontSize: 18, fontWeight: "bold",
					display: "flex", justifyContent: "center", alignItems: "center", color: "white", cursor: "pointer"
				}} onClick={handleClickOrder}>
					{(priceTotalSum - discountTotalSum + 3000 - point)
						?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 결제하기
				</div>

				<div style={{
					width: 900, height: 150, backgroundColor: "#FAFAFD", fontSize: 13, color: "#797979",
					display: "flex", flexDirection: "column", gap: 17,
					paddingTop: 45, paddingLeft: 15
				}}>
					<p style={{ lineHeight: "1.5em" }}
					> 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을 동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지 않습니다.
						<br />무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만 선택하여 주문하여 주시기 바랍니다.</p>
					<p> 최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.</p>
				</div>
			</div>
		</div>
	)
}