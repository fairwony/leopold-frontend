import { Link } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./NoticeDetail.css";
import Footer from "../components/Footer";

export default function NoticeDetail() {
  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="noticeDetail-comm_title">
          <ul className="noticeDetail-tab">
            <li className="noticeDetail-on">
              <Link to="/notice">
                <div className="noticeDetail-img">
                  <img src="\images\Notice\cs_notice_on.svg" alt="확성기" />
                </div>
                <br />
                <div className="noticeDetail-txt">공지사항</div>
              </Link>
            </li>
            <li className="noticeDetail-on">
              <Link to="/download">
                <div className="noticeDetail-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="noticeDetail-txt">자료실</div>
              </Link>
            </li>
            <li className="noticeDetail-on">
              <Link to="/faq">
                <div className="noticeDetail-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="noticeDetail-txt">FAQ</div>
              </Link>
            </li>
            <li className="noticeDetail-on">
              <Link to="/as">
                <div className="noticeDetail-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="noticeDetail-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="noticeDetail-on">
              <Link to="/review">
                <div className="noticeDetail-img">
                  <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="noticeDetail-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="noticeDetail-titleArea">
          <h2>공지사항</h2>
          <p>Notice</p>
        </div>
        {/* 게시판 */}
        <div className="noticeDetail-board">
          <div className="noticeDetail-base-table">
            <table>
              <tbody>
                <tr className="noticeDetail-bd_title">
                  <td>
                    <div className="noticeDetail-t01">
                      {"프리미엄 알파셀 장패드 신규 출시"}
                    </div>
                    <div className="noticeDetail-t02">
                      <span>{"Leopold"}</span>
                      <span>{"2024-08-29"}</span>
                    </div>
                  </td>
                </tr>
                <tr className="noticeDetail-bd_content">
                  <td>
                    <div className="noticeDetail-fr-view">
                      <p>
                        <img
                          src="\images\NoticeDetail\EC958CED8C8CEC858020EAB3B5ECA780.jpg"
                          alt="알파셀 장패드"
                          className="noticeDetail-fr-dib"
                          style={{ width: "700px" }}
                        />
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>
                        <span style={{ fontSize: "20px" }}>
                          <strong>{"🧡프리미엄 알파셀 장패드 출시🧡"}</strong>
                        </span>
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>{"안녕하세요. 레오폴드입니다."}</p>
                      <p>
                        {
                          "키보드 악세서리 프리미엄 알파셀 장패드가 새롭게 출시될 예정입니다."
                        }
                      </p>
                      <p>
                        {"자세한 내용은 제품 상세 페이지 참고 부탁드립니다!"}
                      </p>
                      <p>
                        <br />
                      </p>
                      <p style={{ color: "#000" }}>
                        <strong>{"[ 상세페이지 바로가기 ]"}</strong>
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>
                        <span style={{ fontSize: "22px" }}>
                          <strong>
                            <span style={{ color: "rgb(255, 108, 0)" }}>
                              {
                                "판매일정 : 2024년 9월 2일 월요일 오전 11시부터 판매 시작"
                              }
                            </span>
                          </strong>
                        </span>
                      </p>
                      <p>
                        <br />
                      </p>
                      <p>{"많은 관심 부탁드립니다."}</p>
                      <p>{"감사합니다."}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="noticeDetail-base-button">
            <span>
              <Link to={"/notice"}>목록</Link>
            </span>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
