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


	const [name, setName] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [address, setAddress] = useState("");
	const [addressDetail, setAddressDetail] = useState("");
	const [phone1, setPhone1] = useState("");
	const [phone2, setPhone2] = useState("");
	const [phone3, setPhone3] = useState("");
	const [phoneAlt1, setPhoneAlt1] = useState("");
	const [phoneAlt2, setPhoneAlt2] = useState("");
	const [phoneAlt3, setPhoneAlt3] = useState("");
	const [message, setMessage] = useState("");
	const [messageSelf, setMessageSelf] = useState("");

	const [point, setPoint] = useState('');
	const userPoint = userInfo?.point;

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
		axios.get(`http://localhost:8080/test/info`, { withCredentials: true })
			.then((response) => {
				console.log(response.data);
				setUserInfo(response.data);

				setName(response.data.name);
				setZipcode(response.data.zipcode);
				setAddress(response.data.address);
				setAddressDetail(response.data.addressDetail);
				setPhone1(response.data.phone.split("-")[0]);
				setPhone2(response.data.phone.split("-")[1]);
				setPhone3(response.data.phone.split("-")[2]);
				setPhoneAlt1(response.data.phoneAlt.split("-")[0]);
				setPhoneAlt2(response.data.phoneAlt.split("-")[1]);
				setPhoneAlt3(response.data.phoneAlt.split("-")[2]);
			})
			.catch((error) => {
				console.log(error.response.data);
			});

		axios.get(`http://localhost:8080/wish`, { withCredentials: true })
			.then((response) => {
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
			setName(userInfo?.name);
			setZipcode(userInfo?.zipcode);
			setAddress(userInfo?.address);
			setAddressDetail(userInfo?.addressDetail);
			setPhone1(userInfo?.phone.split("-")[0]);
			setPhone2(userInfo?.phone.split("-")[1]);
			setPhone3(userInfo?.phone.split("-")[2]);
			setPhoneAlt1(userInfo?.phoneAlt.split("-")[0]);
			setPhoneAlt2(userInfo?.phoneAlt.split("-")[1]);
			setPhoneAlt3(userInfo?.phoneAlt.split("-")[2]);
		} else {
			setName("");
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
							value={name} onChange={(e) => { setName(e.target.value) }} />
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
						onClick={() => { setPoint(userInfo?.point?.toString()); }}>전액 사용</button>
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
		</div>
	)
}