import "./DownloadDetail.css";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";

export default function DownloadDetail() {
  return (
    <>
      <WhiteHeader />
      <Main>
        <div id="downloadDetail-container">
          {/* 메뉴 바 */}
          <div className="downloadDetail-comm_title">
            <ul className="downloadDetail-tab">
              <li className="downloadDetail-on">
                <Link to="/notice">
                  <div className="downloadDetail-img">
                    <img src="\images\Download\cs_notice.svg" alt="확성기" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">공지사항</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/download">
                  <div className="downloadDetail-img">
                    <img src="\images\Download\cs_data_on.svg" alt="구름" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">자료실</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/faq">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">FAQ</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/as">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_as.svg" alt="스패너" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">A/S 접수</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/review">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">사용자 리뷰</div>
                </Link>
              </li>
            </ul>
          </div>
          {/* 제목 */}
          <div className="downloadDetail-titleArea">
            <h2>자료실</h2>
            <p>Download</p>
          </div>
          {/* 게시판 */}
          <div className="downloadDetail-board">
            <div className="downloadDetail-base-table">
              <table>
                <tbody>
                  <tr className="downloadDetail-bd_title">
                    <td>
                      <div className="downloadDetail-t01">
                        {"리얼포스 소프트웨어 프로그램"}
                      </div>
                      <div className="downloadDetail-t02">
                        <span>{"Leopold"}</span>
                        <span>{"2024-08-29"}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="downloadDetail-bd_content">
                    <td>
                      <div className="downloadDetail-fr-view">
                        <p>
                          {"리얼포스 소프트웨어 프로그램 다운로드 바로가기"}
                        </p>
                        <p>
                          <span></span>
                        </p>
                        <p>
                          <br />
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
        </div>
      </Main>
      <Footer />
    </>
  );
}
