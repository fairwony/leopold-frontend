import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ForgotId.css";

export default function ForgotId() {
	const [isEmail, setIsEmail] = useState(true);

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

				<input className="forgotId-input" />

				{isEmail
					?
					<div>
						<div className="forgotId-phone">
							이메일로 찾기
						</div>

						<input className="forgotId-input" />
					</div>
					:
					<div>
						<div className="forgotId-phone">
							휴대폰 번호로 찾기
						</div>

						<div className="forgotId-phone-wrapper">
							<input className="forgotId-phoneBox" />
							<span className="forgotId-hyphen">-</span>
							<input className="forgotId-phoneBox" />
							<span className="forgotId-hyphen">-</span>
							<input className="forgotId-phoneBox" />
						</div>
					</div>
				}

				<button className="forgotId-button">확인</button>
			</Main>
			<Footer />
		</div>
	)
}