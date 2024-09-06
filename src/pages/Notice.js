import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import './Notice.css';

export default function Notice() {
	return (
    <>
      <Header />
      <Main>
        <div className="notice-comm_title">
          <ul className="notice-tab">
            <li className="notice-on">
              <Link to=""
              <div className="notice-img">
                <img src="images\Notice\cs_notice_on.svg" alt="확성기" />
              </div>
              <div className="notice-txt">공지사항</div>
            </li>
            <li className="notice-on">
              <div className="notice-img">
                <img src="images\Notice\cs_download.svg" alt="구름" />
              </div>
              <div className="notice-txt">자료실</div>
            </li>
            <li className="notice-on">
              <div className="notice-img">
                <img src="images\Notice\cs_faq.svg" alt="보고서" />
              </div>
              <div className="notice-txt">FAQ</div>
            </li>
            <li className="notice-on">
              <div className="notice-img">
                <img src="images\Notice\cs_as.svg" alt="스패너" />
              </div>
              <div className="notice-txt">A/S 접수</div>
            </li>
            <li className="notice-on">
              <div className="notice-img">
                <img src="images\Notice\cs_review.svg" alt="말풍선" />
              </div>
              <div className="notice-txt">사용자 리뷰</div>
            </li>
          </ul>
        </div>
      </Main>
      <Footer />
    </>
  );
}