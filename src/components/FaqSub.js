import { useRef } from "react";
import "./FaqSub.css";

export default function FaqSub({faq}) {
  // const contentEl = useRef();
  // const { handleToggle, active, faq, page, size } = props;
  // const { header, id, text } = faq;

  return (
    <>
      <div className="faqSub-move">
        <span>
          <img src="images\FAQ\faq_q.svg" alt="Q" />
        </span>
        {faq?.question}
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 8L12 16L20 8"
            stroke="#1A1A1A"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="faqSub-has-sub-a">
        <div className="faqSub-wrap">
          <span>
            <img src="images\FAQ\faq_a.svg" alt="A"></img>
          </span>
          <div>
            <p>{"결제 완료된 주문 건은 직접 변경이 불가능합니다."}</p>
            <p>
              {
                "변경을 원하실 경우 1:1 문의게시판을 이용하시거나, 고객센터로 연락 바랍니다."
              }
            </p>
            <p>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
