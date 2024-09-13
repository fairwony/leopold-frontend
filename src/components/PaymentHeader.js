import "./PaymentHeader.css"

export default function PaymentHeader() {
	return (
		<div className="ph">
			<div className="ph-upper">
				<div className="ph-upper-size1">
					<img src="\images\Payment\navigate_before.png" alt="before" />
				</div>

				<p>레오폴드</p>

				<div className="ph-upper-size1">
					<img src="\images\Payment\bag-04.png" alt="bag" />
					<img src="\images\Payment\user-profile-01.png" alt="profile" />
				</div>
			</div>

			<div className="ph-lower">
				<p>주문/결제</p>
			</div>
		</div>
	)
}