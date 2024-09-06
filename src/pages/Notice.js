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
        <div className='notice-comm_title'>
          <ul className='notice-tab'>
            <li className='notice-on'>
              <Link to={'/notice'}>
                <div className='notice-img'>
                  <img src='images\Notice\cs_notice_on.svg' alt='확성기' />
                </div>
                <br />
                <div className='notice-txt'>공지사항</div>
              </Link>
            </li>
            <li className='notice-on'>
              <Link to={'/download'}>
                <div className='notice-img'>
                  <img src='images\Notice\cs_download.svg' alt='구름' />
                </div>
                <br />
                <div className='notice-txt'>자료실</div>
              </Link>
            </li>
            <li className='notice-on'>
              <Link to={'/faq'}>
                <div className='notice-img'>
                  <img src='images\Notice\cs_faq.svg' alt='보고서' />
                </div>
                <br />
                <div className='notice-txt'>FAQ</div>
              </Link>
            </li>
            <li className='notice-on'>
              <Link to={'/as'}>
                <div className='notice-img'>
                  <img src='images\Notice\cs_as.svg' alt='스패너' />
                </div>
                <br />
                <div className='notice-txt'>A/S 접수</div>
              </Link>
            </li>
            <li className='notice-on'>
              <Link to={'/review'}>
                <div className='notice-img'>
                  <img src='images\Notice\cs_review.svg' alt='말풍선' />
                </div>
                <br />
                <div className='notice-txt'>사용자 리뷰</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='notice-titleArea'>
          <h2 className='notice-h2'>공지사항</h2>
          <p className='notice-p'>Notice</p>
        </div>
      </Main>
      <Footer />
    </>
  );
}