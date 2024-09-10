import { useState } from "react";
import "./ShoppingDetailTable.css";

export default function ShoppingDetailTable({ preview }) {

	const [price, setPrice] = useState();
	const [unit, setUnit] = useState();


	const printPreviewList = preview?.map((pt, index) => {


		return (
			<div key={index}>
				<p>
					{pt.category2},{pt.category3},{pt.category4},{pt.category5},
					<input type="number" defaultValue={1} onChange={(e) => {

						setUnit(pt.price);

						pt.quantity = parseInt(e.target.value);

						pt.price = unit * parseInt(e.target.value);
						setPrice(unit * parseInt(e.target.value));

						console.log(pt);
					}} />,
					{price}
				</p>

			</div>
		)
	})

	return (
		<div className="sdt">
			{printPreviewList}
		</div>
	)
}