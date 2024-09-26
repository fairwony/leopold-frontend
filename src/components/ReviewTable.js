import "./ReviewTable.css";
import { Link } from "react-router-dom";

export default function ReviewTable({list}) {

  const date = new Date(list?.writeDate);
  const year = date?.getFullYear();
  const month = String(date.getMonth() + 1)?.padStart(2, '0');
  const day = String(date.getDate())?.padStart(2, '0');

  return (
    <>
      <tbody className="review-board-list">
        <tr>
          <td>{list.uid}</td>
          <td className="review-subject" style={{color:"#555"}}>
            <Link to={`/review/${list.uid}`}>{list.title}</Link>
            <span className="review-txtEm" />
          </td>
          <td>{list.name}</td>
          <td>
            <span className="review-txtNum">{year}.{month}.{day}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
