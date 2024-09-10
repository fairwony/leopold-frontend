import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	const [isTop, setIsTop] = useState(true);

	const handleScroll = () => {
		if (window.scrollY === 0) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);


	const [isMenuExtend, setIsMenuExtend] = useState(false);

	return (
		<div className="Header">
			{isTop

				?
				<div className="header-transparence">
					<div className="header-wrapper">
						<div className="header-menu-wrapper">
							<img src="\images\Header\h_menu.png" alt="menu_white" className="header-menu-icon"
								onClick={() => { setIsMenuExtend(true); }} />
						</div>

						<Link to="/"><img src="\images\Header\mh_logo.png" alt="logo_white" className="logo" /></Link>

						<div className="header-container">
							<p className="header-point" style={{ color: "white" }}>적립금 1,050P</p>
							<p className="header-service" style={{ color: "white" }}>고객지원</p>
							<img src="\images\Header\search.png" alt="search_white"></img>
							<img src="\images\Header\mypage.png" alt="mypage_white"></img>
							<img src="\images\Header\h_cart.png" alt="cart_white"></img>
						</div>
					</div>
				</div>

				:
				<div className="header-normal">
					<div className="header-wrapper">
						<div className="header-menu-wrapper">
							<img src="\images\Header\h_menu_black.png" alt="menu_black" className="header-menu-icon"
								onClick={() => { setIsMenuExtend(true); }} />
						</div>

						<Link to="/"><img src="\images\Header\logo_black.png" alt="logo_black" className="logo" /></Link>

						<div className="header-container">
							<p className="header-point">적립금 1,050P</p>
							<p className="header-service">고객지원</p>
							<img src="\images\Header\h_search_black.png" alt="search_black"></img>
							<img src="\images\Header\h_mypage_black.png" alt="mypage_black"></img>
							<img src="\images\Header\h_cart_black.png" alt="cart_black"></img>
						</div>
					</div>
				</div>
			}

			

			<div className={isMenuExtend ? "header-extend-yes" : "header-extend-no"}>
				<img src="\images\Header\close.png" onClick={() => { setIsMenuExtend(false) }} alt="close"
					className="header-close" />
			</div>
		</div>
	)
}