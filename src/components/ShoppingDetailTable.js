import "./ShoppingDetailTable.css";

export default function ShoppingDetailTable({ preview }) {

	const printPreviewList = preview?.map((preview, index) => {
		return (
			<div key={index}>
				<p>
					{preview.category2},{preview.category3},{preview.category4},{preview.category5},
					<input type="number" defaultValue={1} onChange={(e) => {
						preview.quantity = parseInt(e.target.value);
						console.log(preview);
					}} />
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