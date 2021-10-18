import { Link } from "react-router-dom";
import StyledNewsitem from "../style/StyledNewsitem";

const NewsItem = ({ news }) => {

    return ( 
        <StyledNewsitem>
          <div className="main">
         <img src={news.thumbnail} alt="" />
          </div>
          <div className="info">

        <h3>{news.title}</h3>
        <p>{news.short_description}</p>
         <Link to={`/gamenews/${news.id}`}>
            <button>
              read more
            </button>
          </Link>
          </div>
        </StyledNewsitem>
     );
}
 
export default NewsItem;