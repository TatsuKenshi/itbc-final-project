import { Link } from "react-router-dom";
import StyledMerchItem from "../style/StyledMerchItem";
import { deleteMerchItem, getAllMerch } from "../Service";

const MerchItem = ({ merchItem, user, allMerchArray, setAllMerchArray, setDisplayMerch }) => {
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
        <Link to={`/merch/${merchItem.id}`}>
          <button>go to item</button>
        </Link>
        {user && user.userCategory === "admin" ? 
        <button onClick={()=>{
          deleteMerchItem(merchItem.id)
          /* getAllMerch().then((res)=> setAllMerchArray(res.data)).then(()=>{

            setDisplayMerch(res.data)
          }) */

          getAllMerch().then((res)=>{
            setAllMerchArray(res.data)
            setDisplayMerch(res.data)
          })

        }}>remove item</button>
        : ""}
      </div>
    </StyledMerchItem>
  );
};

export default MerchItem;
