import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./FAQ.css";
import WhiteHeader from "../components/WhiteHeader";

export default function FAQ() {


  return (
    <>
      <WhiteHeader />
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
        {/* 네비게이션 바 */}
        <div className="faq-navi_cboth" id="faq_navi">
          <ul>
            <li>
              <span>전체</span>
            </li>
            <li className="faq-on">
              <span>주문/결제/배송</span>
            </li>
            <li>
              <span>취소/교환/반품</span>
            </li>
            <li>
              <span>상품/기술지원</span>
            </li>
            <li>
              <span>기타</span>
            </li>
          </ul>
        </div>

        <div className="faq-boardSort_displayNone">
          <span>
            <select name="board_category" id="board_category">
              <option value={"0"}>전체</option>
              <option value={"1"}>주문/결제/배송</option>
              <option value={"2"}>취소/교환/반품</option>
              <option value={"3"}>상품/기술지원</option>
              <option value={"4"}>기타</option>
            </select>
          </span>
          <span></span>
        </div>
      </Main>
      <Footer />
    </>
  );
}
