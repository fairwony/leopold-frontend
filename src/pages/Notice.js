import Header from '../components/Header';
import './Notice.css';

export default function Notice() {
	return (
    <>
      <Header />
      <div>
      <ul>
        <li>
          <div className='Notice-comm_title'>
            <img src="\images\Notice\cs_notice_on.svg" alt="확성기" />
          </div>
          <div>공지사항</div>
        </li>
        <li>
          <div>
            <img src="images\Notice\cs_download.svg" alt="구름" />
          </div>
          <div>자료실</div>
        </li>
        <li>
          <div>
            <img src="images\Notice\cs_faq.svg" alt="보고서" />
          </div>
          <div>FAQ</div>
        </li>
        <li>
          <div>
            <img src="images\Notice\cs_as.svg" alt="스패너" />
          </div>
          <div>A/S 접수</div>
        </li>
        <li>
          <div>
            <img src="images\Notice\cs_review.svg" alt="말풍선" />
          </div>
          <div>사용자 리뷰</div>
        </li>
      </ul>
      </div>
    </>
  );
}