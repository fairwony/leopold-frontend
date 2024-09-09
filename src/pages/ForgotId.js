import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ForgotId.css";

export default function ForgotId() {
	const [isEmail, setIsEmail] = useState(true);

	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone1, setPhone1] = useState();
	const [phone2, setPhone2] = useState();
	const [phone3, setPhone3] = useState();

	return (
		<div className="ForgotId">
			<WhiteHeader />
			<Main>
				<p className="forgotId-title">아이디 찾기</p>

				<div className="forgotId-checkbox-wrapper">
					<input type="radio" name="method" id="byEmail" defaultChecked
						onChange={() => { setIsEmail(true) }} />
					<label for="byEmail">이메일</label>
					<div></div>
					<input type="radio" name="method" id="byPhone"
						onChange={() => { setIsEmail(false) }} />
					<label for="byPhone">휴대폰 번호</label>
				</div>

				<div className="forgotId-name">이름</div>

				<input className="forgotId-input"
					onChange={(e) => { setName(e.target.value) }} />

				{isEmail
					?
					<div>
						<div className="forgotId-phone">
							이메일로 찾기
						</div>

						<input className="forgotId-input" type="email"
							onChange={(e) => { setEmail(e.target.value) }} />
					</div>
					:
					<div>
						<div className="forgotId-phone">
							휴대폰 번호로 찾기
						</div>

						<div className="forgotId-phone-wrapper">
							<input className="forgotId-phoneBox" maxLength={4}
								onChange={(e) => { setPhone1(e.target.value) }} />

							<span className="forgotId-hyphen">-</span>

							<input className="forgotId-phoneBox" maxLength={4}
								onChange={(e) => { setPhone2(e.target.value) }} />

							<span className="forgotId-hyphen">-</span>

							<input className="forgotId-phoneBox" maxLength={4}
								onChange={(e) => { setPhone3(e.target.value) }} />
						</div>
					</div>
				}

				<button className="forgotId-button">확인</button>

				<p>{name}, {email}, {phone1}, {phone2}, {phone3}</p>

			</Main>
			<Footer />
		</div>
	)
}