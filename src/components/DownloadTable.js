import { Link } from "react-router-dom";
import "./DownloadTable.css";

export default function DownloadTable({list}) {
  
  return (
    <>
      {/* 자료실 게시판 목록 내용 */}
      <tbody>
        <tr className="downloadTable-tbody">
          <td
            className="downloadTable-tbodyContent"
            style={{
              color: "#1a1a1a",
            }}
          >
            {list.uid}
          </td>
          <td
            className="downloadTable-tbodyContent"
            style={{
              color: "#9a9a9a",
            }}
          >
            {list.categoryName}
          </td>
          <td
            className="downloadTable-tbodyContent"
            style={{
              color: "#555555",
              padding: "28px 0 28px 32px",
              textAlign: "left",
            }}
          >
            <Link to={"/download/detail"}>
              {list.title}
            </Link>
          </td>
          <td className="downloadTable-tbodyContent">
            <img src="images/Notice/ico_nick1.gif" />
            {"Leopold"}
          </td>
          <td className="downloadTable-tbodyContent">
            <span>{list.writeDate}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
