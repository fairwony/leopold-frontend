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
        <div className="reviewDetail-comm_title">
          <ul className="reviewDetail-tab">
            <li className="reviewDetail-on">
              <Link to="/notice">
                <div className="reviewDetail-img">
                  <img src="\images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="reviewDetail-txt">공지사항</div>
              </Link>
            </li>
            <li className="reviewDetail-on">
              <Link to="/download">
                <div className="reviewDetail-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="reviewDetail-txt">자료실</div>
              </Link>
            </li>
            <li className="reviewDetail-on">
              <Link to="/faq">
                <div className="reviewDetail-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="reviewDetail-txt">FAQ</div>
              </Link>
            </li>
            <li className="reviewDetail-on">
              <Link to="/as">
                <div className="reviewDetail-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="reviewDetail-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="reviewDetail-on">
              <Link to="/review">
                <div className="reviewDetail-img">
                  <img src="\images\Review\cs_review_on.svg" alt="말풍선" />
                </div>
                <br />
                <div className="reviewDetail-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="reviewDetail-titleArea">
          <h2>사용자 리뷰</h2>
          <p>User review</p>
        </div>
        </Main>
        <Footer />
    </>
  );
}