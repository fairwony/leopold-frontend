import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ShoppingTable from "../components/ShoppingTable";
import WhiteHeader from "../components/WhiteHeader";
import "./Shopping.css";

export default function Shopping() {
	const [category1, setCategory1] = useState(1);
	const [category2, setCategory2s] = useState(1);

	const category2List = ["FC900RBT MX2A", "FC900RBT", "NP900RBT", "FC750RBT MX2A", "FC750RBT", "NP750RBT", "FC730RBT MX2A", "FC730RBT MX2A", "FC630MBT MX2A", "FC660MBT", "FC980MBT", "FC650MDSBT"];

	const printCategory2List = category2List?.map((ct2, index) => (
		<div className={category2 === index + 1
			? "shopping-category2-box-select" : "shopping-category2-box-not-select"} key={index}>
			{ct2}
		</div>
	));


	return (
		<div className="Shopping">
			<WhiteHeader />
			<Main>
				<img src="\images\Shopping\temp_banner.jpg" alt="banner" className="shopping-banner" />

				<div className="shopping-category1-container">
					<div className={category1 === 1
						? "shopping-category1-select" : "shopping-category1-not-select"}>
						기계식 유·무선 키보드
					</div>
					<div className={category1 === 2
						? "shopping-category1-select" : "shopping-category1-not-select"}>
						기계식 유선 키보드
					</div>
					<div className={category1 === 3
						? "shopping-category1-select" : "shopping-category1-not-select"}>
						정전용량 무접점
					</div>
				</div>

				<div className="shopping-category2-container">
					{printCategory2List}
				</div>

				<div className="shopping-sort-container">
					<p style={{ fontSize: 12, color: "#6a6a6a" }}>
						총 <span style={{ color: "black", fontWeight: "bold" }}>53</span> 개의 제품이 있습니다.
					</p>

					<select className="shopping-sort-select">
						<option>신상품순</option>
						<option>낮은가격순</option>
						<option>높은가격순</option>
					</select>
				</div>

				<div className="shopping-main-container">
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
					<ShoppingTable />
				</div>
			</Main>
			<Footer />
		</div>
	)
}