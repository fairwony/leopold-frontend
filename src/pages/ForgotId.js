import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./ForgotId.css";

export default function ForgotId() {
	return (
		<div className="ForgotId">
			<Header />
			<Main>
				<p className="forgotId-title">아이디 찾기</p>

				<div className="forgotId-checkbox-wrapper">
					<input type="radio" name="method" id="byEmail" />
					<label for="byEmail">이메일</label>

					<input type="radio" name="method" id="byPhone" />
					<label for="byPhone">휴대폰 번호</label>
				</div>

				<div className="forgotId-name">이름</div>

				<input className="forgotId-input" />

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

				<button className="forgotId-button">확인</button>
			</Main>
			<Footer />
		</div>
	)
}