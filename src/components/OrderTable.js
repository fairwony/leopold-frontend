import "./OrderTable.css";
import OrderTableCart from "./OrderTableCart";

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

			<div className="ot-info-wrapper">
				<OrderTableCart />
				<OrderTableCart />
			</div>
		</div>
	)
}