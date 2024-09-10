import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ShoppingDetailTable from "../components/ShoppingDetailTable";
import WhiteHeader from "../components/WhiteHeader";
import "./ShoppingDetail.css";

export default function ShoppingDetail() {
	const category4List = ["한글", "영문"];
	const printCategory4List = category4List?.map((list, index) => (
		<option key={index} >{list}</option>
	));
	const category5List = ["갈축", "청축", "적축", "흑축", "저소음 적축", "백축", "은축"];
	const printCategory5List = category5List?.map((list, index) => (
		<option key={index} value={list}>{list}</option>
	));

	const category2 = "FC900RBT MX2A";
	const category3 = "코랄 블루";
	const [category4, setCategory4] = useState();
	const [category5, setCategory5] = useState();


	function handleChangeCategory4(e) {
		setCategory4(e.target.value);
	}

	function handleChangeCategory5(e) {
		setCategory5(e.target.value);
		
		const previewTable = {
			category2: category2,
			category3: category3,
			category4: category4,
			category5: e.target.value,
			quantity: 1
		}

		console.log(previewTable);
		setPreview([...preview, previewTable]);
	}

	const [preview, setPreview] = useState([
	]);


	return (
		<div className="sd">
			<WhiteHeader />
			<Main>
				<div style={{ margin: "208px auto 0px auto", display: "flex", gap: 80, width: 1280 }}>
					<div className="sd-section1">
						<img src="\images\MyPage\temp_cover.png" alt="cover" style={{ borderRadius: 30 }}
							width={638} height={638} />


					</div>
					<div className="sd-section2">
						<p style={{ fontSize: 24, fontWeight: "bold" }}>FC900RBT MX2A 코랄 블루</p>

						<div style={{ display: "flex", fontSize: 24, marginTop: 32, alignItems: "center" }}>
							<p style={{ color: "#ff9924", fontWeight: "bold" }}>178,000</p>
							<p style={{ color: "#ff9924", fontWeight: "bold" }}>원</p>
							<p style={{ fontSize: 20, color: "#c6c6c6", textDecoration: "line-through", marginLeft: 20 }}>178,000</p>
							<p style={{ fontSize: 20, color: "#ff5a5a", marginLeft: 10 }}>10</p>
							<p style={{ fontSize: 20, color: "#ff5a5a" }}>%</p>
						</div>

						<div className="sd-deliver-info">
							<div className="sd-deliver-key">
								<p>배송방법</p>
								<p>배송비</p>
							</div>
							<div className="sd-deliver-value">
								<p>택배 or 퀵서비스</p>
								<p>3,000원</p>
							</div>
						</div>

						<select value={category4} onChange={handleChangeCategory4}>
							<option value="">선택하세요</option>
							{printCategory4List}
						</select>

						<select value={category5} onChange={handleChangeCategory5}>
							<option value="">선택하세요</option>
							{printCategory5List}
						</select>


						<ShoppingDetailTable preview={preview} />
						<button onClick={()=>{console.log(preview)}}>눌러봐!</button>
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}