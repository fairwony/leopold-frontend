import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      <Header />
      <Main>
        {/* 메뉴 바 */}
        <div className="faq-comm_title">
          <ul className="faq-tab">
            <li className="faq-on">
              <Link to="/notice">
                <div className="faq-img">
                  <img src="images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="faq-txt">공지사항</div>
              </Link>
            </li>
            <li className="faq-on">
              <Link to="/download">
                <div className="faq-img">
                  <img src="images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="faq-txt">자료실</div>
              </Link>
            </li>
            <li className="faq-on">
              <Link to="/faq">
                <div className="faq-img">
                  <img src="images\FAQ\cs_faq_on.svg" alt="보고서" />
                </div>
                <br />
                <div className="faq-txt">FAQ</div>
              </Link>
            </li>
            <li className="faq-on">
              <Link to="/as">
                <div className="faq-img">
                  <img src="images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="faq-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="faq-on">
              <Link to="/review">
                <div className="faq-img">
                  <img src="images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="faq-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="faq-titleArea">
          <h2 className="faq-h2">FAQ</h2>
          <p className="faq-p">자주 하는 질문</p>
        </div>
      </Main>
      <Footer />
    </>
  );
}
