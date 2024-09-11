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
        <div className="noticeDetail-board-read">
          <div className="noticeDetail-board">
            <div className="noticeDetail-base-table">
                <table>
                    <tr>
                        <td>
                            <div></div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}