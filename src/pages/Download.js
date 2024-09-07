import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./Download.css";
import DownloadTable from "../components/DownloadTable";

export default function Download() {
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
      </Main>
      <Footer />
    </>
  );
}
