import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import OrderTable from "../components/OrderTable";
import WhiteHeader from "../components/WhiteHeader";
import "./Order.css";

export default function Order() {
	const [sort] = useState(4);

	return (
		<div className="Order">
			<WhiteHeader />
			<Main>
				<p className="order-title">주문 내역 조회</p>
				<div className="order">
					<div className="order-nav">
						<div className="order-nav-title">My Page</div>
						<div className="order-nav-menu">주문 내역 조회</div>
						<div className="order-nav-menu">관심 상품</div>
						<div className="order-nav-menu">회원 정보 수정</div>
						<div className="order-nav-menu">접수/문의 내역</div>
					</div>

					<div className="order-main">
						<div className="order-sort-wrapper">
							<div className={sort === 1 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>오늘</p>
							</div>

							<div className={sort === 2 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>1주일</p>
							</div>

							<div className={sort === 3 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>1개월</p>
							</div>

							<div className={sort === 4 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>3개월</p>
							</div>

							<div className={sort === 5 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>6개월</p>
							</div>

							<div className={sort === 6 ? "order-sort-box-y" : "order-sort-box-n"}>
								<p>전체</p>
							</div>
						</div>

						<div className="order-intro">
							<p>기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.</p>
							<p>완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.</p>
							<p>취소/교환/반품 신청은 배송완료일 기준 7일까지 가능합니다.</p>
						</div>

						<div className="order-info-title">주문 상품 정보</div>

						<div className="order-recent-title">
							<div className="order-recent-title-box" style={{ width: "135px" }}>
								주문번호
							</div>

							<div className="order-recent-title-box" style={{ width: "517px" }}>
								상품정보
							</div>

							<div className="order-recent-title-box" style={{ width: "70px" }}>
								수량
							</div>

							<div className="order-recent-title-box" style={{ width: "120px" }}>
								주문금액
							</div>

							<div className="order-recent-title-box" style={{ width: "120px" }}>
								주문상태
							</div>

							<div className="order-recent-title-box" style={{ width: "141px" }}>
								취소/교환/반품
							</div>
						</div>

						<OrderTable />
						<OrderTable />
						<OrderTable />
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}