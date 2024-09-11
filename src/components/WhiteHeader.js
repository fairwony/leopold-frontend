import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export default function WhiteHeader() {
	const [isMenuExtend, setIsMenuExtend] = useState(false);

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
						<p className="header-service">고객지원</p>
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
				<img src="\images\Header\close.png" onClick={() => { setIsMenuExtend(false) }} alt="close"
					className="header-close" />
			</div>
		</div>
	)
}