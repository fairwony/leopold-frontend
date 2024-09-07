import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./Notice.css";
import NoticeTable from "../components/NoticeTable";

export default function Notice() {
  return (
    <>
      <Header />
      <Main>
        {/* 메뉴 바 */}
        <div className="notice-comm_title">
          <ul className="notice-tab">
            <li className="notice-on">
              <Link to="/notice">
                <div className="notice-img">
                  <img src="images\Notice\cs_notice_on.svg" alt="확성기" />
                </div>
                <br />
                <div className="notice-txt">공지사항</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/download">
                <div className="notice-img">
                  <img src="images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="notice-txt">자료실</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/faq">
                <div className="notice-img">
                  <img src="images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="notice-txt">FAQ</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/as">
                <div className="notice-img">
                  <img src="images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="notice-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/review">
                <div className="notice-img">
                  <img src="images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="notice-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="notice-titleArea">
          <h2 className="notice-h2">공지사항</h2>
          <p className="notice-p">Notice</p>
        </div>
        {/* 표 제목 */}
        <div>
          <table className="notice-thead">
            <tr className="notice-theadTitle">
              <th className="notice-theadTitle" style={{
                width : "80px"
              }}>번호</th>
              <th className="notice-theadTitle" style={{
                width : "940px"
              }}>제목</th>
              <th className="notice-theadTitle" style={{
                width : "120px"
              }}>작성자</th>
              <th className="notice-theadTitle" style={{
                width : "120px"
              }}>작성일</th>
              <th className="notice-theadTitle" style={{
                width : "80px"
              }}>조회</th>
            </tr>
            {/* 표 내용 */}
            <tr className="notice-tbody">
              <td className="notice-tbodyContent" style={{
                width : "80px",
                color : "#1a1a1a"
              }}>{18}</td>
              <td className="notice-tbodyContent" style={{
                width : "940px",
                color : "#555555",
                padding : "28px 0 28px 32px",
                textAlign : "left"
              }}>{"프리미엄 알파셀 장패드 신규 출시"}</td>
              <td className="notice-tbodyContent" style={{
                width : "120px"
              }}><img src="images/Notice/ico_nick1.gif" />{"Leopold"}</td>
              <td className="notice-tbodyContent" style={{
                width : "120px"
              }}><span>{"2024-08-29"}</span></td>
              <td className="notice-tbodyContent" style={{
                width : "80px"
              }}><span>{315}</span></td>
            </tr>
          </table>
          <NoticeTable />
        </div>
        {/* 페이지 이동 화살표 */}
        
         </Main>
      <Footer />
    </>
  );
}
