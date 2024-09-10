import "./OrderDetailTable.css";

export default function OrderDetailTable() {
	return (
		<div className="OrderDetailTable">
			<div className="odt-cover-box">
				<img src="\images\MyPage\temp_cover.png" alt="cover" className="odt-cover" />
			</div>

			<div className="odt-info-box">
				<p>FC900RBT MX2A 코랄 블루</p>
				<p style={{ color: "#757575", fontSize: "13px" }}>[옵션: 한글/갈축]</p>
			</div>

			<div className="odt-quantity-box">
				<p style={{ fontSize: 13 }}>1</p>
			</div>

			<div className="odt-price-box">
				<p style={{ fontSize: 16, fontWeight: "bold" }}>178,000원</p>
			</div>

			<div className="odt-price-box">
				<p>입금전</p>
			</div>

			<div className="odt-other-box">
				<p>-</p>
			</div>
		</div>
	)
}