import { Link } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ReviewDetail.css";
import Footer from "../components/Footer";

export default function ReviewDetail() {
  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="review-comm_title">
          <ul className="review-tab">
            <li className="review-on">
              <Link to="/notice">
                <div className="review-img">
                  <img src="\images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="review-txt">공지사항</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/download">
                <div className="review-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="review-txt">자료실</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/faq">
                <div className="review-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="review-txt">FAQ</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/as">
                <div className="review-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="review-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/review">
                <div className="review-img">
                  <img src="\images\Review\cs_review_on.svg" alt="말풍선" />
                </div>
                <br />
                <div className="review-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="review-titleArea">
          <h2>사용자 리뷰</h2>
          <p>User review</p>
        </div>
        {/* 조회 */}
        <div className="datail-contanier">
          <div className="title-box">
            <p className="title-text1">고민끝에 구매(FC900RBT)</p>
            <div className="text2-box">
              <p className="title-text2">김****</p>
              <div className="title-line"></div>
              <p className="title-text2">2024-08-29</p>
            </div>
          </div>
          <div className="content-box">
            <p className="content-text">안녕하세요</p>
            <p className="content-text">빠르게 도착하여.. 수령해서 여기저기 
              확인해보고 타자를 해보니 
              개인적인 기준에는 만족감이 많습니다.</p>
          </div>
          <Link to="/review"><div className="catalog-box">목록</div></Link>
          <div className="comment-container">
            <div className="comment-box1">
              <p className="comment-name">이****</p>
              <p className="comment-text">2024-09-04</p>
              <div className="modify-container">
                <button className="modify-box">수정</button>
                <button className="modify-box">삭제</button>
              </div>
            </div>
            <div className="comment-box2">
            <p className="comment-text">타자 칠 때 불편함은 없나요?</p>
            </div>
          </div>
          <div className="write-comment-container">
            <p className="write-comment-text">댓글달기</p>
            <textarea className="write-comment-content"></textarea>
            <div>
              <button className="write-comment-check">확인</button>
            </div>
          </div>
        </div>
        
      </Main>
      <Footer />
    </>
  );
}
