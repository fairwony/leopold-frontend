import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
	const [isTop, setIsTop] = useState(true);

	const handleScroll = () => {
		if(window.scrollY === 0) {
			setIsTop(true);
		}else{
			setIsTop(false);
		}	
	}

	useEffect(() =>{
		window.addEventListener("scroll", handleScroll);

		return() => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<div className="fixed">
			{isTop ? <div className="transparence-header">
				<div className="header-wrapper">
					<div>
						<img src="images\Header\h_menu.png" alt="menu_white"></img>
					</div>

					<div className="logo">
					<img src="images\Header\mh_logo.png" alt="logo_white" />
					</div>

					<div className="header-container">
						<p className="header-point" style={{color:"white"}}>적립금 1,050P</p>
						<p className="header-service" style={{color:"white"}}>고객지원</p>
						<img className="header-icon" src="images\Header\h_search.png" alt="search_white"></img>
						<img className="header-icon" src="images\Header\h_mypage.png" alt="mypage_white"></img>
						<img className="header-icon" src="images\Header\h_cart.png" alt="cart_white"></img>
					</div>
				</div>
			</div> :
			<div  className="Header">
				<div className="header-wrapper">
					<div>
						<img src="images\Header\h_menu_black.png" alt="menu_black"></img>
					</div>
					
					<div className="logo">
						<img src="images\Header\logo_black.png" alt="logo_black"/>
					</div>

					<div className="header-container">
						<p className="header-point">적립금 1,050P</p>
						<p className="header-service">고객지원</p>
						<img  className="header-icon" src="images\Header\h_search_black.png" alt="search_black"></img>
						<img className="header-icon" src="images\Header\h_mypage_black.png" alt="mypage_black"></img>
						<img className="header-icon" src="images\Header\h_cart_black.png" alt="cart_black"></img>
					</div>
				</div>
			</div>}
		</div>
	)
}