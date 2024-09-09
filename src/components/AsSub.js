import "./AsSub.css";

export default function AsSub() {
  return (
    <>
      <div className="asSub-move">
        <span>
          <img src="images\FAQ\faq_q.svg" alt="Q" />
        </span>
        {"A/S 비용 안내"}
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