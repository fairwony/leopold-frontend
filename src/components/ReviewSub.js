import "./ReviewSub.css";
import { Link } from "react-router-dom";

export default function ReviewSub() {
  return (
    <>
      <tbody className="review-board-list">
        <tr>
          <td>{494}</td>
          <td className="review-subject">
            <Link to={"/review/detail"}>{"굿"}</Link>
            <span className="review-txtEm" />
          </td>
          <td>{"김****"}</td>
          <td>
            <span className="review-txtNum">{"2024-09-10"}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
