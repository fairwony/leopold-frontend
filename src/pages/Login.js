import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./Login.css";

export default function Login() {
	return (
		<div className="Login">
			<WhiteHeader />
			<Main>
				<p className="login-title">로그인</p>

				<div className="login-key1">ID</div>

				<input className="login-input" />

				<div className="login-key2">PASSWORD</div>

				<input type="password" className="login-input" />

				<div className="login-forgot-wrapper">
					<p className="login-forgot-button">아이디 찾기</p>
					<p>/</p>
					<p className="login-forgot-button">비밀번호 찾기</p>
				</div>

				<button className="login-button">로그인</button>

				<div className="login-not-member">
					아직 회원이 아니신가요?
				</div>

				<button className="login-join-button">회원가입</button>
			</Main>
			<Footer />
		</div>
	)
}