import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ReviewNotice.css";

export default function ReviewNotice() {
  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="reviewNotice-comm_title">
          <ul className="reviewNotice-tab">
            <li className="reviewNotice-on">
              <Link to="/notice">
                <div className="reviewNotice-img">
                  <img src="\images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="reviewNotice-txt">공지사항</div>
              </Link>
            </li>
            <li className="reviewNotice-on">
              <Link to="/download">
                <div className="reviewNotice-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="reviewNotice-txt">자료실</div>
              </Link>
            </li>
            <li className="reviewNotice-on">
              <Link to="/faq">
                <div className="reviewNotice-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="reviewNotice-txt">FAQ</div>
              </Link>
            </li>
            <li className="reviewNotice-on">
              <Link to="/as">
                <div className="reviewNotice-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="reviewNotice-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="reviewNotice-on">
              <Link to="/review">
                <div className="reviewNotice-img">
                  <img src="\images\Review\cs_review_on.svg" alt="말풍선" />
                </div>
                <br />
                <div className="reviewNotice-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="reviewNotice-titleArea">
          <h2>사용자 리뷰</h2>
          <p>User review</p>
        </div>
      </Main>
      <Footer />
    </>
  );
}