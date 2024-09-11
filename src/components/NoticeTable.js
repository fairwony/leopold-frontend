import { Link } from "react-router-dom";
import "./NoticeTable.css";

export default function NoticeTable() {
  return (
    <>
      <table className="noticeTable">
        <tr className="notice-tbody">
          <td
            className="notice-tbodyContent"
            style={{
              width: "80px",
              color: "#1a1a1a",
            }}
          >
            {18}
          </td>
          <td
            className="notice-tbodyContent"
            style={{
              width: "940px",
              color: "#555555",
              padding: "28px 0 28px 32px",
              textAlign: "left",
            }}
          >
            <Link to={"/notice/detail"}>
              {"프리미엄 알파셀 장패드 신규 출시"}
            </Link>
          </td>
          <td
            className="notice-tbodyContent"
            style={{
              width: "120px",
            }}
          >
            <img src="images/Notice/ico_nick1.gif" />
            {"Leopold"}
          </td>
          <td
            className="notice-tbodyContent"
            style={{
              width: "120px",
            }}
          >
            <span>{"2024-08-29"}</span>
          </td>
          <td
            className="notice-tbodyContent"
            style={{
              width: "80px",
            }}
          >
            <span>{315}</span>
          </td>
        </tr>
      </table>
    </>
  );
}
