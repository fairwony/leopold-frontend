import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./AS.css";
import AsSub from "../components/AsSub";

export default function AS() {
  const as = Array(3).fill(null);

  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 게시판 메인 */}
        <div className="as-community_list">
          {/* 메뉴 바 */}
          <div className="as-comm_title">
            <ul className="as-tab">
              <li className="as-on">
                <Link to="/notice">
                  <div className="as-img">
                    <img src="\images\Download\cs_notice.svg" alt="확성기" />
                  </div>
                  <br />
                  <div className="as-txt">공지사항</div>
                </Link>
              </li>
              <li className="as-on">
                <Link to="/download">
                  <div className="as-img">
                    <img src="\images\Notice\cs_download.svg" alt="구름" />
                  </div>
                  <br />
                  <div className="as-txt">자료실</div>
                </Link>
              </li>
              <li className="as-on">
                <Link to="/faq">
                  <div className="as-img">
                    <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                  </div>
                  <br />
                  <div className="as-txt">FAQ</div>
                </Link>
              </li>
              <li className="as-on">
                <Link to="/as">
                  <div className="as-img">
                    <img src="\images\AS\cs_as_on.svg" alt="스패너" />
                  </div>
                  <br />
                  <div className="as-txt">A/S 접수</div>
                </Link>
              </li>
              <li className="as-on">
                <Link to="/review">
                  <div className="as-img">
                    <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                  </div>
                  <br />
                  <div className="as-txt">사용자 리뷰</div>
                </Link>
              </li>
            </ul>
          </div>
          {/* 제목 */}
          <div className="as-titleArea">
            <h2>A/S 안내</h2>
            <p>After Service</p>
          </div>
          {/* 네비게이션 바 */}
          <div id="as_navi">
            <ul className="as-navi_cboth">
              <li data-tab="1" id="as-on2">
                <span>A/S 필독사항</span>
              </li>
              <p>|</p>
              <li data-tab="2">
                <span>A/S 접수안내</span>
              </li>
            </ul>
          </div>
          {/* Q&A */}
          <div className="as-cboth_questions">
            <ul>
              <li className="as-has-sub">
                <div className="as-move">
                  <span>
                    <img src="\images\FAQ\faq_q.svg" alt="Q" />
                  </span>
                  {"A/S 정책 및 운영 방침"}
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 8L12 16L20 8"
                      stroke="#1A1A1A"
                      strokeWidth={1.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="as-has-sub-a">
                  <div className="as-wrap">
                    <span>
                      <img src="\images\FAQ\faq_a.svg" alt="A"></img>
                    </span>
                    <div>
                      <p>
                        <span>
                          {
                            "본 약관은 레오폴드㈜에서 판매한 제품에 대하여 고객 여러분들께 더 나은 서비스를 제공하기 위해 작성되었으며 제공되는 서비스는 아래와 같습니다."
                          }
                        </span>
                      </p>
                      <p>
                        <span>{"본 약관은 국내에서만 효력을 갖습니다."}</span>
                      </p>
                      <p>
                        {
                          "본 약관은 레오폴드㈜에서 제조/유통/판매한 제품에 한하여 적용됩니다."
                        }
                      </p>
                      <p>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                {as.map((_, index) => (
                  <AsSub key={index} />
                ))}
              </li>
            </ul>
          </div>
        </div>
        {/* 접수하기 버튼*/}
        <div className="as-btn">
          <span className="as-gRight">
            <Link to="/asReception" className="as-btnSubmit">
              접수하기
            </Link>
          </span>
        </div>
        {/* 스스로 해결방법 */}
        <div className="as-self">
          <div className="as-tit">스스로 해결방법</div>
          <div>
            <Link
              to={"https://www.youtube.com/channel/UCG9XHvC24e3NFSCMVbBGu7w"}
            >
              <div className="as-img">
                <img src="\images\AS\faq01.png" />
              </div>
              <div className="as-text">
                <span className="as-t01">동영상</span>
                <span className="as-t02">동영상 가이드를 활용하여 문제점을 해결해보세요.</span>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to={"/download"}
            >
              <div className="as-img">
                <img src="\images\AS\faq02.png" />
              </div>
              <div className="as-text">
                <span className="as-t01">다운로드 자료실</span>
                <span className="as-t02">제품에 관련된 유용한 자료를 다운로드 할 수 있습니다.</span>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to={"https://www.youtube.com/channel/UCG9XHvC24e3NFSCMVbBGu7w"}
            >
              <div className="as-img">
                <img src="\images\AS\faq03.png" />
              </div>
              <div className="as-text">
                <span className="as-t01">자가진단</span>
                <span className="as-t02">간편하게 스스로 문제점 확인 후 해결해 보세요.</span>
              </div>
            </Link>
          </div>


        </div>
      </Main>
      <Footer />
    </>
  );
}
