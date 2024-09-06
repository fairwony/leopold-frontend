import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import "./Home.css"
import SmallBanner from "../components/SmallBanner"

export default function Home() {
	

	return (
		<div className="Home">
			<Header />
			<Main>
				<Banner></Banner>
				<div className="best-prouduct">
					<div className="yello-picture">
						<img src="images\Home\사람.jpg"></img>
					</div>
					<p className="home-title-boldtext" style={{position:"absolute", top:"124px", left:"1135px"}}>
						BEST PRODUCT
					</p>
					<p className="home-title-lighttext" style={{position:"absolute", top:"196px", left:"1102px"}} >
						올 한해, 가장 많이 사랑받은 베스트셀러 <br/> 다양한 색상으로 나만의 키보드를 지금 만나보세요.
					</p>
					<SmallBanner></SmallBanner>
				</div>
				<div className="leopold-container">
					<p className="home-title-boldtext" style={{marginTop:"96px"}}>
						LEOPOLD
					</p>
					<p className="home-title-lighttext" style={{paddingTop:"12px"}} >
						블루투스 기계식 키보드
					</p>           
					<div style={{margin:"75px 0 0 392px"}}>
						<img src="images\Home\Bluetooth.png"></img>
					</div>
					<p className="leopold-boldtext" style={{margin:"15px 0 0 372px"}}>Bluetooth 5.1</p>
				</div>
			</Main>
			<Footer />
		</div>
	)
}