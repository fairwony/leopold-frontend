import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./One2OneDetail.css";
import "./ReviewDetail.css";

export default function One2OneDetail() {
  return (
    <>
      <WhiteHeader />
      <Main>
        <div id="one2one-container">
          <div id="one2one-contents">
            <div className="one2one-board-listPackage">
              {/* 제목 */}
              <div className="one2one-board-title">
                <h2>
                  <font>1:1문의</font>
                </h2>
                <p>Q&A</p>
              </div>
            </div>
          </div>
        </div>
        {/* 질문 */}
        <div className="qna-container">
          <div className="q-container">
            <div className="qa-box">
              <p className="qa-bold-text">제목</p>
              <p className="qa-light-text">
                레오폴드 제품 중에 2.4 GHz 제품이 있나요?
              </p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">작성자</p>
              <p style={{ width: "540px" }} className="qa-light-text">
                홍길동
              </p>
              <p className="qa-bold-text">답변여부</p>
              <p className="qa-light-text">O</p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">문의일시</p>
              <p className="qa-light-text">2024-09-13</p>
            </div>
            <p
              style={{ lineHeight: "108px", paddingLeft: "50px" }}
              className="qa-light-text"
            >
              블루투스나 유선 연결 제품 말고 2.4 GHz 연결 제품이 있나요?
            </p>
          </div>
          {/* 답변 */}
          <div className="a-container">
            <div className="qa-box">
              <p className="qa-bold-text">답변자</p>
              <p className="qa-light-text">운영자</p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">답변일시</p>
              <p className="qa-light-text">2024-09-13 14:50:44</p>
            </div>
            <div className="a-box">
              <p className="a-light-text">
                안녕하세요 레오폴드 입니다
                <br />
                현재 판매 중인 제품에서 2.4GHz를 지원하는 제품은 없습니다.
                <br />
                감사합니다.
              </p>
            </div>
            <div style={{marginTop:"115px"}} className="review-catalog-container">
              <Link to="/one2one">
                <button className="catalog-box">
                  목록
                </button>
              </Link>
                <button className="one2one-catalog-box">삭제</button>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
