import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./Review.css";
import ReviewTable from "../components/ReviewTable";

export default function Review() {
  const reviewes = Array(14).fill(null);

  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="review-comm_title">
          <ul className="review-tab">
            <li className="review-on">
              <Link to="/notice">
                <div className="review-img">
                  <img src="\images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="review-txt">공지사항</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/download">
                <div className="review-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="review-txt">자료실</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/faq">
                <div className="review-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="review-txt">FAQ</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/as">
                <div className="review-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="review-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/review">
                <div className="review-img">
                  <img src="\images\Review\cs_review_on.svg" alt="말풍선" />
                </div>
                <br />
                <div className="review-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="review-titleArea">
          <h2>사용자 리뷰</h2>
          <p>User review</p>
        </div>
        <div className="review-base-table">
          {/* 게시판 카테고리 */}
          <table>
            <colgroup className="review-board">
              <col style={{ width: "80px" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "120px" }} />
              <col style={{ width: "120px" }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            {/* 게시판 공지사항 */}
            <tbody className="review-board-notice">
              <tr>
                <td>
                  <img
                    src="\images\Review\edb64352918b2053a1637b66ac073850.png"
                    alt="공지"
                  />
                </td>
                <td className="review-subject">
                  <strong>
                    <Link to={"/review/notice"}>{"사용자 리뷰 안내"}</Link>
                  </strong>
                </td>
                <td>
                  <img src="\images\Notice\ico_nick1.gif" />
                  {"Leopold"}
                </td>
                <td>
                  <span className="review-txtNum">{"2023-8-29"}</span>
                </td>
              </tr>
            </tbody>
            <tbody className="review-board-list">
              <tr>
                <td>{494}</td>
                <td className="review-subject">
                  <Link to={"/review/detail"}>{"굿"}</Link>
                  <span className="review-txtEm"></span>
                </td>
                <td>{"김****"}</td>
                <td>
                  <span className="review-txtNum">{"2024-09-10"}</span>
                </td>
              </tr>
            </tbody>
            {reviewes.map((_, index) => (
              <ReviewTable key={index} />
            ))}
          </table>
        </div>
        {/* 글쓰기 버튼 */}
        <div className="review-btn">
          <span className="review-gRight">
            <Link to="/review/detail" className="review-btnSubmit">
              글쓰기
            </Link>
          </span>
        </div>
        {/* 페이지 이동 화살표 */}
        <div className="review-base-paginate">
          <ol>
            <li className="review-record">&lt;</li>
            <li
              className="review-record"
              style={{
                color: "#1a1a1a",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              1
            </li>
            <li className="review-record">2</li>
            <li className="review-record">3</li>
            <li className="review-record">4</li>
            <li className="review-record">5</li>
            <li className="review-record">6</li>
            <li className="review-record">7</li>
            <li className="review-record">8</li>
            <li className="review-record">9</li>
            <li className="review-record">10</li>
            <li className="review-record">&gt;</li>
          </ol>
        </div>
        {/* 찾기 메뉴*/}
        <form>
          <div className="review-board_search">
            <fieldset >
              <select id="review-search_date">
                <option value={"week"}>일주일</option>
                <option value={"month"}>한달</option>
                <option value={"month3"}>세달</option>
                <option value={"all"}>전체</option>
              </select>

              <select id="review-search_key">
                <option value={"subject"}>제목</option>
                <option value={"content"}>내용</option>
                <option value={"writer_name"}>글쓴이</option>
                <option value={"member_id"}>아이디</option>
                <option value={"nick_name"}>별명</option>
              </select>
              <input id="review-search" />
              <span id="review-btn">찾기</span>
            </fieldset>
          </div>
        </form>
      </Main>
      <Footer />
    </>
  );
}
