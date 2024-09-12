import { useState } from "react";
import "./CartTable.css";

export default function CartTable({ selectList, setSelectList }) {
	const [isChecked, setIsChecked] = useState(false);
	let uid = 10;

	function handleClickCheckBox(e) {
		setIsChecked(e.target.checked);

		if (e.target.checked === true) {
			const newList = selectList?.map((listUid, index) => {
				if (listUid !== uid) {
					return listUid;
				}
			});
			newList.push(uid);
			setSelectList(newList);
			console.log(newList);
		} else {
			const newList = selectList?.filter(listUid => listUid !== uid);
			setSelectList(newList);
			console.log(newList);
		}
	}

	return (
		<div className="cart-table">
			<div className="cart-table-key-container">
				<div className="cart-table-key-box" style={{ width: 52 }}>
					<input type="checkbox" style={{ width: 20, height: 20 }}
						checked={isChecked} onChange={handleClickCheckBox} />
				</div>

				<div className="cart-table-key-box" style={{ width: 169 }}>
					<img src="\images\MyPage\temp_cover.png" alt="cover" style={{ width: 120, height: 120, borderRadius: 12 }} />
				</div>

				<div className="cart-table-key-box" style={{ width: 379, alignItems: "start", paddingLeft: 10 }}>
					<p>FC900RBT MX2A 코랄 블루</p>
					<p>[옵션: 한글/갈축]</p>
				</div>

				<div className="cart-table-key-box" style={{ width: 128 }}>
					<input type="number" defaultValue={1}
						style={{ width: 92, height: 26, textAlign: "center", border: "1px solid #e9e9e9" }} />
				</div>

				<div className="cart-table-key-box" style={{ width: 110 }}>
					<p style={{ fontWeight: "bold" }}>197,000원</p>
				</div>

				<div className="cart-table-key-box" style={{ width: 88 }}>
					-
				</div>

				<div className="cart-table-key-box" style={{ width: 88 }}>
					-
				</div>

				<div className="cart-table-key-box" style={{ width: 85 }}>
					기본배송
				</div>

				<div className="cart-table-key-box" style={{ width: 98 }}>
					선택
				</div>

				<div className="cart-table-key-box" style={{ width: 152 }}>
					<button className="cart-table-small-btn">주문하기</button>
					<button className="cart-table-small-btn">관심상품</button>
					<button className="cart-table-small-btn">삭제</button>
				</div>
			</div>
		</div>
	)
}