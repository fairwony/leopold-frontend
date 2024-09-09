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
                  <img src="images\Download\cs_notice.svg" alt="확성기" />
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
                  <img src="images\AS\cs_as_on.svg" alt="스패너" />
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
      </Main>
      <Footer />
    </>
  );
}
