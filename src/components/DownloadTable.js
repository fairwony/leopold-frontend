import "./DownloadTable.css";

export default function DownloadTable() {
  return (
    <>
      <table className="downloadTable">
        <tr className="download-tbody">
        <td
                className="download-tbodyContent"
                style={{
                  width: "80px",
                  color: "#1a1a1a",
                }}
              >
                {29}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "135px",
                  color: "#9a9a9a",
                }}
              >
                {"매뉴얼"}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "885px",
                  color: "#555555",
                  padding: "28px 0 28px 32px",
                  textAlign: "left",
                }}
              >
                {"FC730MBT MX2A Manual"}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "120px",
                }}
              >
                <img src="images/Notice/ico_nick1.gif" />
                {"Leopold"}
              </td>
              <td
                className="download-tbodyContent"
                style={{
                  width: "120px",
                }}
              >
                <span>{"2024-07-31"}</span>
              </td>
        </tr>
      </table>
    </>
  );
}
