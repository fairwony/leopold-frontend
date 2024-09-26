import "./FaqSub.css";

export default function FaqSub({ faq }) {

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
            <img src="images\FAQ\faq_a.svg" alt="A" />
          </span>
          <div>
            <p dangerouslySetInnerHTML={{ __html: faq?.answer }} />
            <p>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
