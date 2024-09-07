import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./Download.css";
import DownloadTable from "../components/DownloadTable";

export default function Download() {
  const downloads = Array(28).fill(null);
  
  return (
    <>
      <Header />
      <Main>
        {/* 메뉴 바 */}
        <div className="download-comm_title">
          <ul className="download-tab">
            <li className="download-on">
              <Link to="/notice">
                <div className="download-img">
                  <img src="images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="download-txt">공지사항</div>
              </Link>
            </li>
            <li className="download-on">
              <Link to="/download">
                <div className="download-img">
                  <img src="/images/Download/cs_data_on.svg" alt="구름" />
                </div>
                <br />
                <div className="download-txt">자료실</div>
              </Link>
            </li>
            <li className="download-on">
              <Link to="/faq">
                <div className="download-img">
                  <img src="images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="download-txt">FAQ</div>
              </Link>
            </li>
            <li className="download-on">
              <Link to="/as">
                <div className="download-img">
                  <img src="images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="download-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="download-on">
              <Link to="/review">
                <div className="download-img">
                  <img src="images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="download-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="download-titleArea">
          <h2 className="download-h2">자료실</h2>
          <p className="download-p">Download</p>
        </div>
        {/* 카테고리 바 */}
        <div className="download-boardSort">
          <select id="download-board_category" name="board_category">
            <option value selected={"selected"}>전체</option>
            <option value={1}>매뉴얼</option>
            <option value={2}>소프트웨아</option>
            <option value={3}>문제해결</option>
          </select>
        </div>
         {/* 표 제목 */}
         <div>
          <table className="download-thead">
            <tr className="download-theadTitle">
              <th
                className="download-theadTitle"
                style={{
                  width: "80px",
                }}
              >
                번호
              </th>
              <th
                className="download-theadTitle"
                style={{
                  width: "940px",
                }}
              >
                제목
              </th>
              <th
                className="download-theadTitle"
                style={{
                  width: "120px",
                }}
              >
                작성자
              </th>
              <th
                className="download-theadTitle"
                style={{
                  width: "120px",
                }}
              >
                작성일
              </th>
              <th
                className="download-theadTitle"
                style={{
                  width: "80px",
                }}
              >
                조회
              </th>
            </tr>
            {/* 표 내용 */}
            <tr className="download-tbody">
              <td
                className="download-tbodyContent"
                style={{
                  width: "80px",
                  color: "#1a1a1a",
                }}
              >
                {18}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "940px",
                  color: "#555555",
                  padding: "28px 0 28px 32px",
                  textAlign: "left",
                }}
              >
                {"프리미엄 알파셀 장패드 신규 출시"}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "120px",
                }}
              >
                <img src="images/Notice/ico_nick1.gif" />
                {"Leopold"}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "120px",
                }}
              >
                <span>{"2024-08-29"}</span>
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "80px",
                }}
              >
                <span>{315}</span>
              </td>
            </tr>
          </table>
          {downloads.map((_, index) => (
            <DownloadTable key={index} />
          ))}
        </div>
      </Main>
      <Footer />
    </>
  );
}
