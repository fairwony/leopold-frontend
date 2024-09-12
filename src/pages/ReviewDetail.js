import { Link } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ReviewDetail.css";
import WhiteHeader from "../components/WhiteHeader";
import { Link } from "react-router-dom";
import Main from "../components/Main";
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
        </div>
      </Main>
      <Footer />
    </>
  );
}
