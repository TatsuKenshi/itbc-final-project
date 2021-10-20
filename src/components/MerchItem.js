import { Link } from "react-router-dom";
import StyledMerchItem from "../style/StyledMerchItem";

const MerchItem = ({ merchItem, user }) => {
  return (
    <StyledMerchItem>
      <div className="main">
        <div className="img">
          <p>image coming soon</p>
        </div>
      </div>

      <div className="info">
        <h3>{merchItem.itemName}</h3>
        <p>Price: ${merchItem.price}</p>
        <p>{merchItem.shortDesc}</p>
        <Link to={`http://TatsuKenshi.github.io/itbc-final-project/merch/${merchItem.id}`}>
          <button>go to item</button>
        </Link>
      </div>
    </StyledMerchItem>
  );
};

export default MerchItem;
