import { Link, useNavigate, useParams } from "react-router-dom";
import Main from "../components/Main";
import WhiteHeader from "../components/WhiteHeader";
import "./ReviewDetail.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewDetail() {

  const [review, setReview] = useState({
    title:"",
    name:"",
    writeDate:"",
    content:"",
    deleteYn:""
  });

  const [content, setContent] = useState("");


  // 시간 설정
  const date = new Date(review?.writeDate);
  const year = date?.getFullYear();
  const month = String(date.getMonth() + 1)?.padStart(2, '0');
  const day = String(date.getDate())?.padStart(2, '0');

  const {uid} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/review/${uid}`)
    .then((res) =>{
      setReview(res.data);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  const handleSubmit = () =>{
    axios.post(`http://localhost:8080/comment/write/${uid}`,
      {
        content: `${content}`
      },
      {
        withCredentials: true,
      }
    )
    .then((resp) => {
      navigate("/review/${uid}")
      alert("댓글 작성 완료!");
    })
    .catch((e) => {
      alert("로그인이 필요합니다!")
    });
  }


  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="review-comm_title">
          <ul className="review-tab">
            <li className="review-on">
              <Link to="/notices">
                <div className="review-img">
                  <img src="\images\Download\cs_notice.svg" alt="확성기" />
                </div>
                <br />
                <div className="review-txt">공지사항</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/downloads">
                <div className="review-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="review-txt">자료실</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/faq">
                <div className="review-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="review-txt">FAQ</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/as">
                <div className="review-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="review-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="review-on">
              <Link to="/review">
                <div className="review-img">
                  <img src="\images\Review\cs_review_on.svg" alt="말풍선" />
                </div>
                <br />
                <div className="review-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="review-titleArea">
          <h2>사용자 리뷰</h2>
          <p>User review</p>
        </div>
        {/* 조회 */}
        <div className="datail-contanier">
          <div className="title-box">
            <p className="title-text1">{review.title}</p>
            <div className="text2-box">
              <p className="title-text2">{review.name}</p>
              <div className="title-line"></div>
              <p className="title-text2">{year}.{month}.{day}</p>
            </div>
          </div>
          <div className="content-box">
            <p className="content-text" dangerouslySetInnerHTML={{ __html: review.content }}>
            </p>
          </div>
          <div className="review-catalog-container">
            <Link to="/review">
              <button className="catalog-box">목록</button>
            </Link>
            <div className="delete-container">
              <button className="catalog-box">삭제</button>
              <Link to ="/review/modify">
              <button className="review-modify-box">수정</button>
              </Link>
            </div>
          </div>
          {/* 댓글 조회 */}
          <div className="comment-container">
            <div className="comment-box1">
              <p className="comment-name">이름</p>
              <p className="comment-text">2023-04-23</p>
              <div className="modify-container">
                <button className="modify-box">수정</button>
                <button className="modify-box">삭제</button>
              </div>
            </div>
            <div className="comment-box2">
              <p className="comment-text">내용</p>
            </div>
          </div>
          {/* 댓글 작성*/}
          <div className="write-comment-container">
            <p className="write-comment-text">댓글달기</p>
            <textarea className="write-comment-content"
            onChange={(e) =>{
              setContent(e.target.value);
            }}></textarea>
            <div>
              <button className="write-comment-check" onClick={handleSubmit}>확인</button>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
