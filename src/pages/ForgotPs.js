import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ForgotPs.css";

export default function ForgotPs() {
	const [isEmail, setIsEmail] = useState(true);

	const [id, setId] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone1, setPhone1] = useState();
	const [phone2, setPhone2] = useState();
	const [phone3, setPhone3] = useState();

	return (
		<div className="ForgotPs">
			<WhiteHeader />
			<Main>
				<p className="forgotPs-title">비밀번호 찾기</p>

				<div className="forgotPs-checkbox-wrapper">
					<input type="radio" name="method" id="byEmail" defaultChecked
						onChange={() => { setIsEmail(true) }} />
					<label for="byEmail">이메일</label>

					<input type="radio" name="method" id="byPhone"
						onChange={() => { setIsEmail(false) }} />
					<label for="byPhone">휴대폰 번호</label>
				</div>

				<div className="forgotPs-id">아이디</div>

				<input className="forgotPs-input"
					onChange={(e) => { setId(e.target.value) }} />

				<div className="forgotPs-name">이름</div>

				<input className="forgotPs-input"
					onChange={(e) => { setName(e.target.value) }} />

				{isEmail
					?
					<div>
						<div className="forgotPs-phone">
							이메일로 찾기
						</div>

						<input className="forgotPs-input" type="email"
							onChange={(e) => { setEmail(e.target.value) }} />
					</div>
					:
					<div>
						<div className="forgotPs-phone">
							휴대폰 번호로 찾기
						</div>

						<div className="forgotPs-phone-wrapper">
							<input className="forgotPs-phoneBox"
								onChange={(e) => { setPhone1(e.target.value) }} />

							<span className="forgotPs-hyphen">-</span>

							<input className="forgotPs-phoneBox"
								onChange={(e) => { setPhone2(e.target.value) }} />

							<span className="forgotPs-hyphen">-</span>

							<input className="forgotPs-phoneBox"
								onChange={(e) => { setPhone3(e.target.value) }} />
						</div>
					</div>}

				<button className="forgotPs-button">확인</button>
				<p>{id}, {name}, {email}, {phone1}, {phone2}, {phone3}</p>
			</Main>
			<Footer />
		</div>
	)
}