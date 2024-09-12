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
            <div className="one2one-board-list">
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
                  <tbody className="one2one-board-list">
                    <tr>
                      <td>{494}</td>
                      <td className="one2one-subject">
                        <Link to={"/one2one/detail"}>{"1:1 문의"}</Link>
                        <span className="one2one-txtEm" />
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
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}