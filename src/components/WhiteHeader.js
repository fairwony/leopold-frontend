import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function WhiteHeader() {

	return (
		<div className="fixed">
			<div className="Header">
				<div className="header-wrapper">
					<div>
					<img src="images\Header\h_menu_black.png" alt="menu_black"></img>
					</div>
					
					<div className="logo">
				        <Link to ='/'><img src="images\Header\logo_black.png" alt="logo_black"/></Link>
			        </div>

					<div className="header-container">
						<p className="header-point">적립금 1,050P</p>
						<p className="header-service">고객지원</p>
						<img  className="header-icon" src="images\Header\h_search_black.png" alt="search_black"></img>
						<img className="header-icon" src="images\Header\h_mypage_black.png" alt="mypage_black"></img>
						<img className="header-icon" src="images\Header\h_cart_black.png" alt="cart_black"></img>
					</div>
				</div>
			</div>
		</div>
	)
}