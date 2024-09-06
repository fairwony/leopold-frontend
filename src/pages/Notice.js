import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./Notice.css";

export default function Notice() {
  return (
    <>
      <Header />
      <Main>
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
        <div className="notice-titleArea">
          <h2 className="notice-h2">공지사항</h2>
          <p className="notice-p">Notice</p>
        </div>
        <div>
          <table>
            <tr>
              <th>번호</th>
              <th>카테고리</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
              <th>추천</th>
              <th>평점</th>
            </tr>
            <tr>
              <td>18</td>
              <td>프리미엄 알파셀 장패드 신규 출시</td>
              <td><img src="images/Notice/ico_nick1.gif" />"Leopold"</td>
              <td><span>2024-08-29</span></td>
              <td><span>315</span></td>
            </tr>
          </table>
        </div>
         </Main>
      <Footer />
    </>
  );
}
