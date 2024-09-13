import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextSystem } from "../functions/MyContext";
import "./Header.css";

export default function WhiteHeader() {
	const { get, set } = useContext(ContextSystem);
	const navigate = useNavigate();

	const [isMenuExtend, setIsMenuExtend] = useState(false);

	const [is1Extend, setIs1Extend] = useState(true);

	const [is1_1Extend, setIs1_1Extend] = useState(false);
	const [is1_2Extend, setIs1_2Extend] = useState(false);
	const [is1_3Extend, setIs1_3Extend] = useState(false);

	const [is1_1_1Extend, setIs1_1_1Extend] = useState(false);
	const [is1_1_2Extend, setIs1_1_2Extend] = useState(false);

	return (
		<div className="WhiteHeader">
			<div className="header-normal">
				<div className="header-wrapper">
					<div className="header-menu-wrapper">
						<img
							src="\images\Header\h_menu_black.png"
							alt="menu_black"
							className="header-menu-icon"
							onClick={() => {
								setIsMenuExtend(true);
							}}
						/>
					</div>

					<Link to="/">
						<img
							src="\images\Header\logo_black.png"
							alt="logo_black"
							className="logo"
						/>
					</Link>

					<div className="header-container">
						<p className="header-point">적립금 1,050P</p>
						<Link to="/support">
						<p className="header-service">고객지원</p>
						</Link>
						<img
							src="\images\Header\h_search_black.png"
							alt="search_black"
						></img>
						<img
							src="\images\Header\h_mypage_black.png"
							alt="mypage_black"
						></img>
						<img src="\images\Header\h_cart_black.png" alt="cart_black"></img>
					</div>
				</div>
			</div>

			<div className={isMenuExtend ? "header-extend-yes" : "header-extend-no"}>
				<img
					src="\images\Header\close.png"
					onClick={() => {
						setIsMenuExtend(false);
					}}
					alt="close"
					className="header-close"
				/>

				<div className="header-menu-container">
					<div className="header-c1">
						<p>쇼핑</p>
						{is1Extend ? (
							<div
								className="header-minus"
								onClick={() => {
									setIs1Extend(!is1Extend);
								}}
							>
								-
							</div>
						) : (
							<div
								className="header-plus"
								onClick={() => {
									setIs1Extend(!is1Extend);
								}}
							>
								+
							</div>
						)}
					</div>

					<div
						className={
							is1Extend ? "header-c2-container" : "header-c2-container-hide"
						}
					>
						<div className="header-c2">
							<p>레오폴드 키보드</p>
							{is1_1Extend ? (
								<div
									className="header-minus"
									onClick={() => {
										setIs1_1Extend(!is1_1Extend);
									}}
								>
									-
								</div>
							) : (
								<div
									className="header-plus"
									onClick={() => {
										setIs1_1Extend(!is1_1Extend);
									}}
								>
									+
								</div>
							)}
						</div>

						<div
							className={
								is1_1Extend ? "header-3-container" : "header-3-container-hide"
							}
						>
							<div className="header-c3">
								<p>기계식 유·무선 키보드</p>
								{is1_1_1Extend ? (
									<div
										className="header-minus"
										onClick={() => {
											setIs1_1_1Extend(!is1_1_1Extend);
										}}
									>
										-
									</div>
								) : (
									<div
										className="header-plus"
										onClick={() => {
											setIs1_1_1Extend(!is1_1_1Extend);
										}}
									>
										+
									</div>
								)}
							</div>

							<div
								className={
									is1_1_1Extend
										? "header-c4-container"
										: "header-c4-container-hide"
								}
							>
								<p className="header-c4">FC900RBT MX2A</p>
								<p className="header-c4">FC900RBT</p>
								<p className="header-c4">NP900RBT</p>
								<p className="header-c4">FC750RBT MX2A</p>
								<p className="header-c4">FC750RBT</p>
								<p className="header-c4">NP750RBT</p>
								<p className="header-c4">FC730MBT MX2A</p>
								<p className="header-c4">FC630MBT MX2A</p>
								<p className="header-c4">FC660MBT</p>
								<p className="header-c4">FC980MBT</p>
								<p className="header-c4">FC650MDSBT</p>
							</div>

							<div className="header-c3">
								<p>기계식 무선 키보드</p>
								{is1_1_2Extend ? (
									<div
										className="header-minus"
										onClick={() => {
											setIs1_1_2Extend(!is1_1_2Extend);
										}}
									>
										-
									</div>
								) : (
									<div
										className="header-plus"
										onClick={() => {
											setIs1_1_2Extend(!is1_1_2Extend);
										}}
									>
										+
									</div>
								)}
							</div>

							<div
								className={
									is1_1_2Extend
										? "header-c4-container"
										: "header-c4-container-hide"
								}
							>
								<p className="header-c4">FC900R MX2A</p>
								<p className="header-c4">FC900R</p>
								<p className="header-c4">FC750R</p>
								<p className="header-c4">FC980M</p>
								<p className="header-c4">FC660M</p>
								<p className="header-c4">FC650MDS</p>
								<p className="header-c4">FC210TP</p>
							</div>

							<div className="header-c3">
								<p>정전용량 무접점</p>
							</div>
						</div>

						<div className="header-c2">
							<p>리얼포스 키보드</p>
							{is1_2Extend ? (
								<div
									className="header-minus"
									onClick={() => {
										setIs1_2Extend(!is1_2Extend);
									}}
								>
									-
								</div>
							) : (
								<div
									className="header-plus"
									onClick={() => {
										setIs1_2Extend(!is1_2Extend);
									}}
								>
									+
								</div>
							)}
						</div>

						<div
							className={
								is1_2Extend ? "header-3-container" : "header-3-container-hide"
							}
						></div>

						<div className="header-c2">
							<p>악세서리</p>
							{is1_3Extend ? (
								<div
									className="header-minus"
									onClick={() => {
										setIs1_3Extend(!is1_3Extend);
									}}
								>
									-
								</div>
							) : (
								<div
									className="header-plus"
									onClick={() => {
										setIs1_3Extend(!is1_3Extend);
									}}
								>
									+
								</div>
							)}
						</div>

						<div
							className={
								is1_3Extend ? "header-3-container" : "header-3-container-hide"
							}
						></div>
					</div>

					<img
						src="\images\Header\leopold_logo.png"
						alt="logo"
						style={{ marginTop: 10, width: 122 }}
					/>

					<div></div>

					<p className="header-c1">Contact</p>

					<div></div>

					<p className="header-c1">Global</p>

					<div></div>

					<div className="login-container">
						{get.isLogin ? <p style={{ cursor: "pointer" }} onClick={() => {
							axios.post('http://localhost:8080/logout', {
								withCredentials: true
							})
								.then((response) => {
									console.log(response.data);

									localStorage.setItem('isLogin', 'false');
									set.isLogin(false);

									alert("로그아웃 되었습니다.");
									navigate('/');
								})
								.catch((error) => {
									console.log(error.response.data);

									localStorage.setItem('isLogin', 'false');
									set.isLogin(false);

									alert("이미 세션이 종료된 상태입니다.");
									navigate('/');
								});
						}}>로그아웃</p> : <Link to="/login"><p>로그인</p></Link>}
						<p>·</p>
						<Link to="/join"><p>회원가입</p></Link>
					</div>
				</div>
			</div>
		</div>
	);
}
