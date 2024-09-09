import "./FaqSub.css";

export default function FaqSub() {
  return (
    <>
      <div className="faqSub-move">
        <span>
          <img src="images\FAQ\faq_q.svg" alt="Q" />
        </span>
        {"주문 내역을 변경할 수 있나요?"}
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
    </>
  );
}
