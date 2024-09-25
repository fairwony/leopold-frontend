import { Link, useNavigate, useParams } from "react-router-dom";

export default function One2OneTable({list, index}) {

const date = new Date(list?.writeDate);

const year = date?.getFullYear();

const month = String(date.getMonth() + 1)?.padStart(2, '0');

const day = String(date.getDate())?.padStart(2, '0');

const { one2one } = useParams();




  return (
    <>
    {/* 1대1 문의 게시판 내용 */}
    <tbody className="one2one-board-list">
                    <tr>
                      <td>{list.uid}</td>
                      <td className="one2one-subject">
                        <Link key={index} to={`/one2one/detail/${index}`}>{list.title}</Link>
                      </td>
                      <td>{list.name}</td>
                      <td>
                        <span className="one2one-txtNum">{year}.{month}.{day}</span>
                      </td>
                      <td>
                        <span className="one2one-txtOx">{list.answerYn == "y" ? "O" : "X"}</span>
                      </td>
                    </tr>
                  </tbody>
    </>
  );
}
