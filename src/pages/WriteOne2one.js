import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./WriteOne2one.css";
import "./WriteReview.css";
import EditorComponent from "../components/Editor";
import axios from "axios";

export default function WriteOne2one() {

window.onload = function(){
const domainListEl = document.querySelector('#domain-list')
const domainInputEl = document.querySelector('#domain-txt')

domainListEl.addEventListener('change', (event) => {

  if(event.target.value !== "type") {

    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { 
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
})}

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
        {/* 글작성 */}
        <div className="write-one2one-container">
          <div className="write-title-container">
            <p style={{ fontSize: "15px", width: "58px" }}>제목</p>
            <textarea className="write-title-box"></textarea>
          </div>
          <div className="write-email-container">
            <div className="email-top-container">
              <p className="email-title">이메일</p>
              <textarea className="email-text-box"></textarea>
              <p style={{ color: "#9d9d9d", padding: "5px" }}>@</p>
              <input class="box" id="domain-txt" type="text" className="email-text-box"></input>
              <select class="box" id="domain-list" className="select-box" name="email">
                <option value="type">직접 입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="nate.com">nate.com</option>
              </select>
            </div>
            <div className="q-check-container">
              <p className="q-email">답변 여부를 메일로 받으시겠습니까?</p>
              <div className="q-check">
                <input type="radio" name="check" id="yes"></input>
                <label for="yes">예</label>

                <input type="radio" name="check" id="no"></input>
                <label for="no">아니오</label>
              </div>
            </div>
          </div>
          <div style={{marginTop:"10px"}} className="write-content-container">
            <div className="write-content-top">
                <EditorComponent />
            </div>
            <textarea className="write-content"></textarea>
          </div>
          <div className="catalog-container">
            <Link to="/review">
              <button className="catalog-box2">목록</button>
            </Link>
            <div className="cancle-container">
              <button className="register-box">등록</button>
              <button className="catalog-box2">취소</button>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
