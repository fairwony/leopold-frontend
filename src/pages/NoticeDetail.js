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
        <div id="noticeDetail-container">
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
                        {"FC730MBT MX2A 코랄 블루 신제품 출시"}
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
                            src={
                              "/images/NoticeDetail/73020MX2A20EC8BA0EAB79CECB69CEC8B9C20EAB3B5ECA780.jpg"
                            }
                            alt={"FC730MBT MX2A"}
                            className="noticeDetail-fr-dib"
                            sizes={"900px/1543px"}
                          />
                        </p>
                        <p>
                          <span>
                            <strong
                              style={{
                                fontWeight: "bolder",
                                color: "rgb(26, 26, 26)",
                                fontFamily: "Inter, Pretendard, sans-serif",
                                fontSize: "28px",
                                textAlign: "center",
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            >
                              <span style={{ color: "rgb(255, 108, 0)" }}>
                                {
                                  "판매일정 : 2024년 9월 2일 월요일 오전 11시 판매 시작"
                                }
                              </span>
                            </strong>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span>
                            {"* 위 일정은 제반 상황에 따라 변경될 수 있습니다."}
                          </span>
                        </p>
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
          {/* 다음글 */}
          <div className="noticeDetail-board-movement">
            <span>
              <strong>다음글</strong>
              {"FC730MBT MX2A 코랄 블루 신제품 출시"}
            </span>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
