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
          <ul data-tab>
            <li data-tab="0" className="faq-on2">
              <span>전체</span>
            </li>
            <li data-tab="1" >
              <span>주문/결제/배송</span>
            </li>
            <li data-tab="2" >
              <span>취소/교환/반품</span>
            </li>
            <li data-tab="3" >
              <span>상품/기술지원</span>
            </li>
            <li data-tab="4" >
              <span>기타</span>
            </li>
          </ul>
        </div>


        {/* 페이지 이동 화살표 */}
        <div className="faq-paging">
          <ul className="faq-ul">
            <li>&lt;</li>
            <li
              style={{
                color: "#1a1a1a",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              1
            </li>
            <li>&gt;</li>
          </ul>
        </div>
        {/* 찾기 메뉴*/}
        <form>
          <div className="faq-board_search">
            <fieldset >
              <select id="faq-search_date">
                <option value={"week"}>일주일</option>
                <option value={"month"}>한달</option>
                <option value={"month3"}>세달</option>
                <option value={"all"}>전체</option>
              </select>

              <select id="faq-search_key">
                <option value={"subject"}>제목</option>
                <option value={"content"}>내용</option>
                <option value={"writer_name"}>글쓴이</option>
                <option value={"member_id"}>아이디</option>
                <option value={"nick_name"}>별명</option>
              </select>
              <input id="faq-search" />
              <span id="faq-btn">찾기</span>
            </fieldset>
          </div>
        </form>
      </Main>
      <Footer />
    </>
  );
}
