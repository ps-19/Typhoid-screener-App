import { Link } from "react-router-dom";
import "./card.css";

function Card({title, contents}) {
    console.log(contents)
    return(
        <div className="card-md shadow-lg">
        <p>{title}</p>
        <ul>
        {contents.map((content) => {
            return <li>{content}</li>
        })}
        </ul>
        <Link to="/">See more details here</Link>
        </div>
    )
}

export default Card;