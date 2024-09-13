import "./PaymentProductTable.css";

export default function PaymentProductTable() {
	return (
		<div className="PaymentProductTable">
			<div className="ppt-product-container">
					<div className="ppt-product-cover-wrapper">
						<img src="\images\MyPage\temp_cover.png" alt="cover" width={90} height={90} />
					</div>

					<div className="ppt-product-info-wrapper">
						<p className="ppt-product-info-font1">FC750RBT MX2A 그레이 블루</p>
						<p className="ppt-product-info-font2">[옵션: 한글/청축]</p>
						<p className="ppt-product-info-font2">수량: 1개</p>
						<p className="ppt-product-info-font3">175,000원</p>
					</div>

					<div className="ppt-product-cancel-wrapper">
						<div className="ppt-product-cancel-box">X</div>
					</div>
				</div>
		</div>
	)
}