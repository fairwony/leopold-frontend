import "./OrderTable.css"

export default function OrderTable() {
	return (
		<div className="OrderTable">
			<div className="ot-num">
				<p className="ot-date">2024-09-03</p>
				<p className="ot-uid">20240903-0000021</p>

				<button className="ot-num-order-view">주문상세보기</button>

				<div style={{ display: "flex", gap: "6px" }}>
					<button className="ot-small-btn">주문취소</button>
					<button className="ot-small-btn">교환</button>
				</div>
			</div>

			<div className="ot-cover-box">
				<img className="ot-cover" src="\images\MyPage\temp_cover.png" alt="cover" />
			</div>

			<div className="ot-info">
				<p className="ot-info-1">FC900RBT MX2A 코랄 블루</p>
				<p className="ot-info-2">[옵션: 한글/갈축]</p>
			</div>

			<div className="ot-quantity">
				1
			</div>

			<div className="ot-price">
				178,000원
			</div>

			<div className="ot-order-status">
				입금전
			</div>

			<div className="ot-others">
				-
			</div>
		</div>
	)
}