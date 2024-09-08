import Footer from "../components/Footer";
import Main from "../components/Main";
import "./Join.css";
import WhiteHeader from "../components/WhiteHeader";

export default function Join() {
	return (
		<div className="Join">
			<WhiteHeader />
			<Main>
				<p className="join-title">회원가입</p>

				<div className="join-small-title-wrapper">
					<p className="join-small-title">기본정보</p>
					<p className="join-must"><span className="join-red-star">*</span> 필수입력사항</p>
				</div>

				<div className="join-info-wrapper">
					<tr>
						<td className="join-key">
							아이디<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input className="join-input1" />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							비밀번호<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input type="password" className="join-input1" />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							비밀번호 확인<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input type="password" className="join-input1" />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							이름<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input className="join-input1" />
						</td>
					</tr>

					<tr className="join-s-tr">
						<td className="join-key join-address">
							주소<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<div className="join-address-wrapper">
								<div className="join-address-line">
									<input className="join-input2" />
									<button className="join-search-address">주소검색</button>
								</div>
								<input className="join-input3" />
								<input className="join-input3" />
							</div>
						</td>
					</tr>

					<tr>
						<td className="join-key">
							일반전화
						</td>
						<td className="join-value">
							<div className="join-phoneWrapper">
								<input className="join-input4" />
								<p className="join-hyphen">-</p>
								<input className="join-input4" />
								<p className="join-hyphen">-</p>
								<input className="join-input4" />
							</div>
						</td>
					</tr>

					<tr>
						<td className="join-key">
							휴대전화<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<div className="join-phoneWrapper">
								<input className="join-input4" />
								<p className="join-hyphen">-</p>
								<input className="join-input4" />
								<p className="join-hyphen">-</p>
								<input className="join-input4" />
							</div>
						</td>
					</tr>

					<tr>
						<td className="join-key">
							이메일<span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input className="join-input1" />
						</td>
					</tr>
				</div>

				<p className="join-small-title2">약관동의</p>

				<div className="join-all-agree-box">
					<input type="checkbox" id="join-clause1" />
					<label for="join-clause1">이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
				</div>

				<div className="join-agree-wrapper">
					<div className="join-agree-box">
						<input type="checkbox" id="join-clause2" />
						<label for="join-clause2">[필수] 이용약관 동의</label>
						<p className="join-see-clause">약관보기</p>
					</div>
					<div className="join-clause">

					</div>
					<div className="join-agree-box">
						<input type="checkbox" id="join-clause3" />
						<label for="join-clause3">[필수] 개인정보 수집 및 이용 동의</label>
						<p className="join-see-clause">약관보기</p>
					</div>
					<div className="join-clause">

					</div>
					<div className="join-agree-box">
						<input type="checkbox" id="join-clause4" />
						<label for="join-clause4">[선택] SMS 수신 동의</label>
						<div className="join-blank"></div>
						<input type="checkbox" id="join-clause5" />
						<label for="join-clause5">[선택] 이메일 수신 동의</label>
					</div>
				</div>

				<div className="join-finalJoin">
					회원가입
				</div>
			</Main >
			<Footer />
		</div >
	)
}