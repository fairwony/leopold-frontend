import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./AS.css";

export default function AS() {
	return (
		<>
			<WhiteHeader />
			<Main>
				{/* 메뉴 바 */}
				<div className="as-comm_title">
          <ul className="as-tab">
            <li className="as-on">
              <Link to="/notice">
                <div className="as-img">
                  <img src="images\Notice\cs_notice_on.svg" alt="확성기" />
                </div>
                <br />
                <div className="as-txt">공지사항</div>
              </Link>
            </li>
            <li className="as-on">
              <Link to="/download">
                <div className="as-img">
                  <img src="images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="as-txt">자료실</div>
              </Link>
            </li>
            <li className="as-on">
              <Link to="/faq">
                <div className="as-img">
                  <img src="images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="as-txt">FAQ</div>
              </Link>
            </li>
            <li className="as-on">
              <Link to="/as">
                <div className="as-img">
                  <img src="images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="as-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="as-on">
              <Link to="/review">
                <div className="as-img">
                  <img src="images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="as-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
			</Main>
			<Footer />
		</>
	)
}