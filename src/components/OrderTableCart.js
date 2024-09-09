import "./OrderTableCart.css";

export default function OrderTableCart() {
	return (
		<div className="otc">
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