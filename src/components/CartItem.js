import { Link } from "react-router-dom";
import StyledCartItem from "../style/StyledCartItem";

const CartItem = ({ cartItem, user, purchase, setPurchase, total, setTotal }) => {


  return (
    <StyledCartItem>
      <div className="main">
        <div className="img">
          <p>image coming soon</p>
        </div>
      </div>

      <div className="info">
        <h3>{cartItem.itemName}</h3>
        <p>Price: ${cartItem.price}</p>
        <p>{cartItem.shortDesc}</p>
        <button
          onClick={() => {
            let copy = purchase;

            let index = purchase.findIndex((item) => item.id === cartItem.id);
            copy[index].quantity -= 1;
            copy[index].itemPrice = copy[index].quantity * copy[index].price

            setPurchase(copy);

            if (cartItem.quantity < 1) {
              let copy = purchase;
              let index = copy.findIndex((item) => item.id === cartItem.id);
              copy.splice(index, 1);
              setPurchase(copy);
            }

            let sumArray = purchase.map((item)=> item.itemPrice).reduce((prev, curr)=>{
              return prev + curr
            },0)
            setTotal(sumArray);
          }}
          
        >
          -
        </button>

        <span className="quantity">{cartItem.quantity}</span>

        <button
          onClick={() => {
            let copy = purchase;

            let index = purchase.findIndex((item) => item.id === cartItem.id);
            copy[index].quantity += 1;
            copy[index].itemPrice = copy[index].quantity * copy[index].price

            setPurchase(copy);

            let sumArray = purchase.map((item)=> item.itemPrice).reduce((prev, curr)=>{
              return prev + curr
            },0)
            setTotal(sumArray);
          }}
        >
          +
        </button>

        <span className="totalItemPrice">
          ${cartItem.itemPrice}
        </span>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
