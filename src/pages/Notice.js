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
              <div className="notice-img">
                <img src="images\Notice\cs_notice_on.svg" alt="확성기" />
              </div>
              <div className='notice-text'>공지사항</div>
            </li>
            <li>
              <div className='notice-img'>
                <img src="images\Notice\cs_download.svg" alt="구름" />
              </div>
              <div className='notice-text'>자료실</div>
            </li>
            <li>
              <div className="notice-img">
                <img src="images\Notice\cs_faq.svg" alt="보고서" />
              </div>
              <div className="notice-text">FAQ</div>
            </li>
            <li>
              <div className="notice-img">
                <img src="images\Notice\cs_as.svg" alt="스패너" />
              </div>
              <div className='notice-text'>A/S 접수</div>
            </li>
            <li>
              <div className='notice-img'>
                <img src='images\Notice\cs_review.svg' alt="말풍선" />
              </div>
              <div className='notice-text'>사용자 리뷰</div>
            </li>
          </ul>
        </div>
      </Main>
      <Footer />
    </>
  );
}