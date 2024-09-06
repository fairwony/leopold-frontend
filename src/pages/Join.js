import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./Join.css";

export default function Join() {
	return (
		<div className="Join">
			<Header />
			<Main>
				<p className="join-title">회원가입</p>

				<div className="join-small-title-wrapper">
					<p className="join-small-title">기본정보</p>
					<p><span className="join-red-star">*</span> 필수입력사항</p>
				</div>

				<div className="join-info-wrapper">
					<tr>
						<td className="join-key">
							아이디 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							비밀번호 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							비밀번호 확인 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							이름 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							주소 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<div><input /> <input /></div>
							<input />
							<input />
						</td>
					</tr>

					<tr>
						<td className="join-key">
							일반전화
						</td>
						<td className="join-value">
							<div>
								<input />
								<p className="join-hyphen">-</p>
								<input />
								<p className="join-hyphen">-</p>
								<input />
							</div>
						</td>
					</tr>

					<tr>
						<td className="join-key">
							휴대전화 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<div>
								<input />
								<p className="join-hyphen">-</p>
								<input />
								<p className="join-hyphen">-</p>
								<input />
							</div>
						</td>
					</tr>

					<tr>
						<td className="join-key">
							이메일 <span className="join-red-star">*</span>
						</td>
						<td className="join-value">
							<input />
						</td>
					</tr>
				</div>

				<p className="join-small-title">약관동의</p>

				<div className="join-all-agree-box">
					<input type="checkbox" />
				</div>

				<div className="join-agree-wrapper">
					<div className="join-agree-box">

					</div>
					<div className="join-clause">

					</div>
					<div className="join-agree-box">

					</div>
					<div className="join-clause">

					</div>
					<div className="join-sms-email-agree-wrapper">
						<input type="checkbox" /><input type="checkbox" />
					</div>
				</div>

				<div className="finalJoin">
					회원가입
				</div>
			</Main >
			<Footer />
		</div >
	)
}