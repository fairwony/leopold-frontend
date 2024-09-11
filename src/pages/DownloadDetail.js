import "./DownloadDetail.css";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";

export default function DownloadDetail() {
  return (
    <>
      <WhiteHeader />
      <Main>
        <div id="downloadDetail-container">
          {/* 메뉴 바 */}
          <div className="downloadDetail-comm_title">
            <ul className="downloadDetail-tab">
              <li className="downloadDetail-on">
                <Link to="/notice">
                  <div className="downloadDetail-img">
                    <img src="\images\Download\cs_notice.svg" alt="확성기" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">공지사항</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/download">
                  <div className="downloadDetail-img">
                    <img src="\images\Download\cs_data_on.svg" alt="구름" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">자료실</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/faq">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">FAQ</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/as">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_as.svg" alt="스패너" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">A/S 접수</div>
                </Link>
              </li>
              <li className="downloadDetail-on">
                <Link to="/review">
                  <div className="downloadDetail-img">
                    <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                  </div>
                  <br />
                  <div className="downloadDetail-txt">사용자 리뷰</div>
                </Link>
              </li>
            </ul>
          </div>
          {/* 제목 */}
          <div className="downloadDetail-titleArea">
            <h2>자료실</h2>
            <p>Download</p>
          </div>


        </div>
      </Main>
      <Footer />
    </>
  );
}
