import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./AsReception.css";

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
                <ul className="aasReception-tab">
                  <li className="asReception-on">
                    <Link to="/notice">
                      <div className="asReception-img">
                        <img
                          src="\images\Download\cs_notice.svg"
                          alt="확성기"
                        />
                      </div>
                      <br />
                      <div className="asReception-txt">공지사항</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/download">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_download.svg" alt="구름" />
                      </div>
                      <br />
                      <div className="asReception-txt">자료실</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/faq">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                      </div>
                      <br />
                      <div className="asReception-txt">FAQ</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/as">
                      <div className="asReception-img">
                        <img src="\images\AS\cs_as_on.svg" alt="스패너" />
                      </div>
                      <br />
                      <div className="asReception-txt">A/S 접수</div>
                    </Link>
                  </li>
                  <li className="asReception-on">
                    <Link to="/review">
                      <div className="asReception-img">
                        <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                      </div>
                      <br />
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
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}