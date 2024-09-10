import Footer from "../components/Footer";
import Main from "../components/Main";
import MyPageNav from "../components/MyPageNav";
import OrderTable from "../components/OrderTable";
import QnaTableMini from "../components/QnaTableMini";
import WhiteHeader from "../components/WhiteHeader";
import "./MyPage.css";

export default function MyPage() {
	return (
		<div className="MyPage">
			<WhiteHeader />
			<Main>
				<div className="mypage">
					<MyPageNav />

					<div className="mypage-main">
						<div className="mypage-title1">주문 처리 현황</div>

						<div className="mypage-status">
							<div className="mypage-status-box1">
								<p className="mypage-status-p1">입금대기</p>
								<p className="mypage-status-p2">1</p>
							</div>

							<div className="mypage-status-box2">
								<img src="\images\MyPage\mypage_arrow.png" alt="arrow" />
							</div>

							<div className="mypage-status-box1">
								<p className="mypage-status-p1">상품준비중</p>
								<p className="mypage-status-p2">0</p>
							</div>

							<div className="mypage-status-box2">
								<img src="\images\MyPage\mypage_arrow.png" alt="arrow" />
							</div>

							<div className="mypage-status-box1">
								<p className="mypage-status-p1">배송중</p>
								<p className="mypage-status-p2">0</p>
							</div>

							<div className="mypage-status-box2">
								<img src="\images\MyPage\mypage_arrow.png" alt="arrow" />
							</div>

							<div className="mypage-status-box1">
								<p className="mypage-status-p1">배송완료</p>
								<p className="mypage-status-p2">0</p>
							</div>
						</div>

						<div className="mypage-title2">
							<p className="mypage-title2-p1">최근 주문 내역</p>
							<p className="mypage-title2-p2">최근 주문 더보기 &gt;</p>
						</div>

						<div className="mypage-recent-title">
							<div className="mypage-recent-title-box" style={{ width: "135px" }}>
								주문번호
							</div>

							<div className="mypage-recent-title-box" style={{ width: "517px" }}>
								상품정보
							</div>

							<div className="mypage-recent-title-box" style={{ width: "70px" }}>
								수량
							</div>

							<div className="mypage-recent-title-box" style={{ width: "120px" }}>
								주문금액
							</div>

							<div className="mypage-recent-title-box" style={{ width: "120px" }}>
								주문상태
							</div>

							<div className="mypage-recent-title-box" style={{ width: "141px" }}>
								취소/교환/반품
							</div>
						</div>

						<OrderTable />
						<OrderTable />

						<div className="mypage-title2">
							<p className="mypage-title2-p1">문의 내역</p>
							<p className="mypage-title2-p2">문의 내역 더보기 &gt;</p>
						</div>

						<div className="mypage-recent-title">
							<div className="mypage-recent-title-box" style={{ width: "70px" }}>
								번호
							</div>

							<div className="mypage-recent-title-box" style={{ width: "712.5px" }}>
								제목
							</div>

							<div className="mypage-recent-title-box" style={{ width: "160px" }}>
								작성일
							</div>

							<div className="mypage-recent-title-box" style={{ width: "160px" }}>
								답변
							</div>
						</div>

						<QnaTableMini />
					</div>
				</div>
			</Main>
			<Footer />
		</div>
	)
}