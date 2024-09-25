import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./One2OneDetail.css";
import "./ReviewDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function One2OneDetail() {
  const [one2One, setOne2One] = useState({
    title:"",
    name:"",
    writeDate:"",
    content:"",
    answerYn:"",
    answer:"",
    answerDate:"",
    deleteYn:""
  });

  const {uid} = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8080/one2one/${uid}`)
    .then((resp) => {
      setOne2One(resp.data);
    })
    .catch((e)=> {
      console.log(e);
    })
  }, [])

  const handleDelte=() => {
    axios.delete(`http://localhost:8080/one2one/delete/${uid}`,{
      data:{
        deleteYn:"y"
      },
      withCredentials:true
    })
    if(window.confirm("해당 문의를 삭제하시겠습니까?")){
      alert("삭제 완료!")
    }
  }

const localDateTime1 = one2One?.writeDate;

const format1 = localDateTime1.replace('T', ' ');

const localDateTime2 = one2One?.answerDate;

const format2 = localDateTime2.replace('T', ' ');




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
        {/* 질문 */}
        <div className="qna-container">
          <div className="q-container">
            <div className="qa-box">
              <p className="qa-bold-text">제목</p>
              <p className="qa-light-text">
              {one2One.title}
              </p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">작성자</p>
              <p style={{ width: "540px" }} className="qa-light-text">
                {one2One.name}
              </p>
              <p className="qa-bold-text">답변여부</p>
              <p className="qa-light-text">{one2One.answerYn == "y" ? "O" : "X"}</p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">문의일시</p>
              <p className="qa-light-text">{format1}</p>
            </div>
            <p
              style={{ lineHeight: "108px", paddingLeft: "50px" }}
              className="qa-light-text" dangerouslySetInnerHTML={{ __html: one2One.content }}
            >
            </p>
          </div>
          {/* 답변 */}
         {one2One.answerYn == "y" ? (
         <div className="a-container">
            <div className="qa-box">
              <p className="qa-bold-text">답변자</p>
              <p className="qa-light-text">운영자</p>
            </div>
            <div className="qa-box">
              <p className="qa-bold-text">답변일시</p>
              <p className="qa-light-text">{format2}</p>
            </div>
            <div className="a-box">
              <p className="a-light-text" dangerouslySetInnerHTML={{ __html: one2One.answer }}>
              </p>
            </div>
            <div style={{marginTop:"115px"}} className="review-catalog-container">
              <Link to="/one2one">
                <button className="catalog-box">
                  목록
                </button>
              </Link>
                <button className="one2one-catalog-box"
                onClick={handleDelte}>삭제</button>
            </div>
          </div>) : 
          <div className="a-container">
          <div className="qa-box">
            <p className="qa-bold-text">답변자</p>
            <p className="qa-light-text"></p>
          </div>
          <div className="qa-box">
            <p className="qa-bold-text">답변일시</p>
            <p className="qa-light-text">{one2One.answerDate}</p>
          </div>
          <div className="a-box">
            <p className="a-light-text" dangerouslySetInnerHTML={{ __html: one2One.answer }}>
            </p>
          </div>
          <div style={{marginTop:"115px"}} className="review-catalog-container">
            <Link to="/one2one">
              <button className="catalog-box">
                목록
              </button>
            </Link>
              <button className="one2one-catalog-box"
              onClick={handleDelte}>삭제</button>
          </div>
        </div>}
        </div>
      </Main>
      <Footer />
    </>
  );
}
