import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./AsReception.css";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import EditorComponent from "../components/Editor";

export default function AsReception() {
  
  return (
    <>
      <WhiteHeader />
      <Main>
        <div id="asReception-container">
          <div id="asReception-contents">
            <div className="asReception-board">
              {/* 메뉴 바 */}
              <div className="asReception-comm_title">
                <ul className="asReception-tab">
                  <li className="asReception-on">
                    <Link to="/notice">
                      <div className="asReception-img">
                        <img
                          src="\images\Download\cs_notice.svg"
                          alt="확성기"
                        />
                      </div>
                      <div className="asReception-txt">공지사항</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/download">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_download.svg" alt="구름" />
                      </div>
                      <div className="asReception-txt">자료실</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/faq">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                      </div>
                      <div className="asReception-txt">FAQ</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/as">
                      <div className="asReception-img">
                        <img src="\images\AS\cs_as_on.svg" alt="스패너" />
                      </div>
                      <div className="asReception-txt">A/S 접수</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/review">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                      </div>
                      <div className="asReception-txt">사용자 리뷰</div>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* 제목 */}
              <div className="asReception-titleArea">
                <h2>A/S 접수</h2>
                <p>After Service</p>
              </div>
              {/* 에디터 */}
              <form id="asReception-boardWrite">
                <div className="asReception-base-table">
                  <table border={1}>
                    <colgroup>
                      <col style={{ width: "130px" }} />
                      <col style={{ width: "auto" }} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <td>
                          <input
                            id="asReception-subject"
                            name="asReception-subject"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="asReception-clear">
                          <EditorComponent />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="asReception-base-button">
                  <span className="asReception-gLeft">
                    <Link to={"/as"}>목록</Link>
                  </span>
                  <div className="asReception-gRight">
                    <span className="asReception-btnSubmit">등록</span>
                    <span className="asReception-btnBasic">취소</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
