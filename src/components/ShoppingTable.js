import "./ShoppingTable.css";

export default function ShoppingTable() {
	return (
		<div className="ShoppingTable">
			<img src="\images\MyPage\temp_cover.png" alt="cover" className="st-cover" />
			<p style={{ marginTop: 22 }}>FC900RBT MX2A 코랄 블루</p>

			<div style={{ display: "flex", marginTop: 28, alignItems: "baseline" }}>
				<p style={{ fontSize: 24, fontWeight: "bold" }}>157,000</p>
				<p>원</p>
			</div>

			<div style={{ display: "flex", gap: 10, marginTop: 10 }}>
				<p style={{ color: "#ff5a5a" }}>10%</p>
				<p style={{ color: "#b2b2b2", textDecoration: "line-through" }}>175,000원</p>
			</div>
		</div >
	)
}