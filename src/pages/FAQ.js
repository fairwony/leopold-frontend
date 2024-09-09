import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./FAQ.css";
import WhiteHeader from "../components/WhiteHeader";
import FaqSub from "./FaqSub";

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
          <h2>FAQ</h2>
          <p>자주 하는 질문</p>
        </div>
        {/* 네비게이션 바 */}
        <div id="faq_navi">
          <ul className="faq-navi_cboth">
            <li data-tab="1" id="faq-on2">
              <span>주문/결제/배송</span>
            </li>
            <p>|</p>
            <li data-tab="2">
              <span>취소/교환/반품</span>
            </li>
            <p>|</p>
            <li data-tab="3">
              <span>상품/기술지원</span>
            </li>
            <p>|</p>
            <li data-tab="4">
              <span>기타</span>
            </li>
          </ul>
        </div>
        {/* Q&A */}
        <div className="faq-cboth_questions">
          <ul>
            <li className="faq-has-sub">
              <div className="faq-move">
                <span>
                  <img src="images\FAQ\faq_q.svg" alt="Q" />
                </span>
                {"주문 내역을 변경할 수 있나요?"}
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8L12 16L20 8"
                    stroke="#1A1A1A"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="faq-has-sub-a">
                <div className="faq-wrap">
                  <span>
                    <img src="images\FAQ\faq_a.svg" alt="A"></img>
                  </span>
                  <div>
                    <p>{"결제 완료된 주문 건은 직접 변경이 불가능합니다."}</p>
                    <p>
                      {
                        "변경을 원하실 경우 1:1 문의게시판을 이용하시거나, 고객센터로 연락 바랍니다."
                      }
                    </p>
                    <p>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <FaqSub />
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
            <fieldset>
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
