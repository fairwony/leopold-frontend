import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./AsReception.css";
import FroalaEditor from "react-froala-wysiwyg";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/align.min.js";

import { useState } from "react";
import axios from "axios";

export default function AsReception() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] =
    useState(`<p>[A/S 필독 사항] 확인 후 접수 부탁드리며, 반드시 '하단 양식 작성' 및 '댓글 안내 확인' 후 발송하여 주시기 바랍니다.
    접수 정보 오 기재 및 누락, 수리 규정 및 댓글 안내 미 확인으로 인한 분실 및 불이익은 당 사에서 책임지지 않습니다.
    정확하게 작성하지 않는 경우 제품이 누락되거나 수리 기간이 지연될 수 있습니다. <br />
    <br />
    - 성 함 : <br />
    - 연락처 : <br />
    - 주 소 : <br />
    - Part No : <br />
    - Serial No: <br />
    - 증 상 : <br />
    <br />
    ※ 'Do not remove' 스티커 및 A/S 스티커 고의적인 훼손은 임의 분해 및 개조로 취급되며,
    개인 및 제3자를 포함한 임의 개조, 윤활 및 분해 흔적이 있는 경우 유·무상 포함 A/S 불가 대상으로 '별도 연락없이 착불 반송' 되오니 참고 부탁드립니다.</p>`);

  const [model, setModel] = useState("Example Set");

  const handleContentChange = (model) => setContent(model);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/asReception",
        {
          title: title,
          content: content,
        },
        { withCredentials: true }
      )
      .then((response) => {
        alert(response.data);
        navigate("/as");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

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
                    <Link to="/notices">
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
                    <Link to="/downloads">
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
                          <FroalaEditor
                            tag="textarea"
                            model={content}
                            onModelChange={handleContentChange}
                          />
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
                    <span className="asReception-btnSubmit" onClick={handleSubmit}>등록</span>
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
