import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ForgotPs.css";

export default function ForgotPs() {
	return (
		<div className="ForgotPs">
			<WhiteHeader />
			<Main>
				<p className="forgotPs-title">비밀번호 찾기</p>

				<div className="forgotPs-checkbox-wrapper">
					<input type="radio" name="method" id="byEmail" />
					<label for="byEmail">이메일</label>

					<input type="radio" name="method" id="byPhone" />
					<label for="byPhone">휴대폰 번호</label>
				</div>

				<div className="forgotPs-id">아이디</div>

				<input className="forgotPs-input" />

				<div className="forgotPs-name">이름</div>

				<input className="forgotPs-input" />

				<div className="forgotPs-phone">
					휴대폰 번호로 찾기
				</div>

				<div className="forgotPs-phone-wrapper">
					<input className="forgotPs-phoneBox" />
					<span className="forgotPs-hyphen">-</span>
					<input className="forgotPs-phoneBox" />
					<span className="forgotPs-hyphen">-</span>
					<input className="forgotPs-phoneBox" />
				</div>

				<button className="forgotPs-button">확인</button>
			</Main>
			<Footer />
		</div>
	)
}