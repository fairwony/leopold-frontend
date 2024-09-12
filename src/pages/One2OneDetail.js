import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./One2OneDetail.css";

export default function One2OneDetail() {
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
              </div>
          </div>
        </div>
        {/* 조회 */}
        <div className="qna-container">
            <div className="q-container"></div>
        </div>
      </Main>
      <Footer />
    </>
  );
}