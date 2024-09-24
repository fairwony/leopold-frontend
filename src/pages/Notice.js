import { Link, useNavigate, useSearchParams } from "react-router-dom";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./Notice.css";
import NoticeTable from "../components/NoticeTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Notice() {

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const [noticeList, setNoticeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/notices?page=${page}&size=${size}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setNoticeList(res.data);
      })
      .catch((err) => console.log(err.res.data));
  }, [page, size]);

  const printNoticeList = noticeList.map((list, index) => (
    <NoticeTable list={list} key={index} />
  ));

  return (
    <>
      <WhiteHeader />
      <Main>
        {/* 메뉴 바 */}
        <div className="notice-comm_title">
          <ul className="notice-tab">
            <li className="notice-on">
              <Link to="/notice">
                <div className="notice-img">
                  <img src="\images\Notice\cs_notice_on.svg" alt="확성기" />
                </div>
                <br />
                <div className="notice-txt">공지사항</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/download">
                <div className="notice-img">
                  <img src="\images\Notice\cs_download.svg" alt="구름" />
                </div>
                <br />
                <div className="notice-txt">자료실</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/faq">
                <div className="notice-img">
                  <img src="\images\Notice\cs_faq.svg" alt="보고서" />
                </div>
                <br />
                <div className="notice-txt">FAQ</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/as">
                <div className="notice-img">
                  <img src="\images\Notice\cs_as.svg" alt="스패너" />
                </div>
                <br />
                <div className="notice-txt">A/S 접수</div>
              </Link>
            </li>
            <li className="notice-on">
              <Link to="/review">
                <div className="notice-img">
                  <img src="\images\Notice\cs_review.svg" alt="말풍선" />
                </div>
                <br />
                <div className="notice-txt">사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        {/* 제목 */}
        <div className="notice-titleArea">
          <h2>공지사항</h2>
          <p>Notice</p>
        </div>

        <div className="notice-base-table">
          <table className="notice-thead">
            {/* 공지사항 게시판 카테고리 */}
            <colgroup className="notice-board">
              <col style={{ width: "80px" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "120px" }} />
              <col style={{ width: "120px" }} />
              <col style={{ width: "80px" }} />
            </colgroup>
            <thead>
              <tr className="notice-theadTitle">
                <th className="notice-theadTitle">번호</th>
                <th className="notice-theadTitle">제목</th>
                <th className="notice-theadTitle">작성자</th>
                <th className="notice-theadTitle">작성일</th>
                <th className="notice-theadTitle">조회</th>
              </tr>
            </thead>
            {/* 공지사항 게시판 내용 */}
            {printNoticeList}
          </table>
          
        </div>
        {/* 페이지 이동 화살표 */}
        <div className="notice-paging">
          <ul className="notice-ul">
            <li>&lt;</li>
            <li
              style={{
                color: "#1a1a1a",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              1
            </li>
            <li>2</li>
            <li>&gt;</li>
          </ul>
        </div>
        {/* 찾기 메뉴*/}
        <form>
          <div className="notice-board_search">
            <fieldset>
              <select id="notice-search_date">
                <option value={"week"}>일주일</option>
                <option value={"month"}>한달</option>
                <option value={"month3"}>세달</option>
                <option value={"all"}>전체</option>
              </select>

              <select id="notice-search_key">
                <option value={"subject"}>제목</option>
                <option value={"content"}>내용</option>
                <option value={"writer_name"}>글쓴이</option>
                <option value={"member_id"}>아이디</option>
                <option value={"nick_name"}>별명</option>
              </select>
              <input id="notice-search" />
              <span id="notice-btn">찾기</span>
            </fieldset>
          </div>
        </form>
      </Main>
      <Footer />
    </>
  );
}
