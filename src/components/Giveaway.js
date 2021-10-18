import { Link } from "react-router-dom";
import StyledGiveaway from "../style/StyledGiveaway";

const Giveaway = ({ giveaway }) => {
  return (
    <StyledGiveaway>
      <div className="main">
        <img src={giveaway.thumbnail} alt="" className="img" />
      </div>

      <div className="info">
        <h3>{giveaway.title}</h3>
        <p>Keys left: {giveaway.keys_left}</p>
        <Link to={`/giveaways/${giveaway.id}`}>
          <button>read more</button>
        </Link>
      </div>
    </StyledGiveaway>
  );
};

export default Giveaway;
