import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./One2one.css";

export default function One2one() {
  return (
    <>
      <WhiteHeader />
      <Main>
        <div id="one2one-container">
          <div id="one2one-contents">
            <div className="one2one-board-listPackage">
              {/* 제목 */}
              <div className="one2one-board-title">
                <h2>
                  <font>1:1문의</font>
                </h2>
                <p>Q&A</p>
              </div>
              {/* 게시판 */}
              <div className="one2one-base-table">
                <table>
                  <colgroup className="one2one-board-listHeader">
                    <col style={{ width: "70px" }} />
                    <col style={{ width: "auto" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                  </colgroup>
                  <thead className="one2one-board-listHeader">
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                      <th>답변</th>
                    </tr>
                  </thead>
                  {/* 게시판 목록 */}
                  <tbody className="one2one-board-list">
                    <tr>
                      <td>{1}</td>
                      <td className="one2one-subject">
                        <Link to={"/one2one/detail"}>{"1:1 문의"}</Link>
                      </td>
                      <td>{"김****"}</td>
                      <td>
                        <span className="one2one-txtNum">{"2024-09-03"}</span>
                      </td>
                      <td>
                        <span className="one2one-txtOx">{"O"}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 글쓰기 버튼 */}
              <div className="one2one-btn">
                <span className="one2one-gRight">
                  <Link to="/one2one/detail" className="one2one-btnSubmit">
                    글쓰기
                  </Link>
                </span>
              </div>
            </div>
            {/* 찾기 메뉴*/}
            <form>
              <div className="one2one-board_search">
                <fieldset>
                  <select id="one2one-search_date">
                    <option value={"week"}>일주일</option>
                    <option value={"month"}>한달</option>
                    <option value={"month3"}>세달</option>
                    <option value={"all"}>전체</option>
                  </select>

                  <select id="one2one-search_key">
                    <option value={"subject"}>제목</option>
                    <option value={"content"}>내용</option>
                    <option value={"writer_name"}>글쓴이</option>
                    <option value={"member_id"}>아이디</option>
                    <option value={"nick_name"}>별명</option>
                  </select>
                  <input id="one2one-search" />
                  <span id="one2one-btn">찾기</span>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}