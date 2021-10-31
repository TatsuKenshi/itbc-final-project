import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneMerchItem } from "../Service";
import StyledSingleMerchItem from "../style/StyledSingleMerchItem";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleMerchItem = ({ user, purchase, setPurchase, total, setTotal }) => {
  // one merch item state
  const [oneMerchItem, setOneMerchItem] = useState([]);
  //console.log(purchase);

  // merch item id
  let { id } = useParams();

  // one merch item useEffect
  useEffect(() => {
    getOneMerchItem(id).then((res) => {
      setOneMerchItem(res.data);
    });
  }, []);

  return (
    <StyledSingleMerchItem>
      {/* title, image, item description */}
      <div className="main">
        <div className="mainTitle">
          {/* title */}
          <div className="titleDiv">
            <h2 className="title">{oneMerchItem?.itemName}</h2>
          </div>

          {/* add to cart button */}
          {user && user.userCategory !== "admin" ? (
            <div className="addToCart">
              <button
                onClick={() => {
                  /* let found = user.favoriteGames.find(
                    (fave) => fave.id === Number(id)
                  ); */

                  let found = purchase.find((purchasedItem) => {
                    return purchasedItem.id === oneMerchItem.id;
                  });

                  if (!found) {
                    setPurchase((prev) => [
                      ...prev,
                      {
                        id: oneMerchItem.id,
                        itemName: oneMerchItem.itemName,
                        category: oneMerchItem.category,
                        quantity: 1,
                        price: oneMerchItem.price,
                        itemPrice: oneMerchItem.price * oneMerchItem.quantity,
                        shortDesc: oneMerchItem.shortDesc
                      },
                    ]);

                    // we update the shoppingCart state with this item
                  } else {
                    let copy = purchase;

                    let index = purchase.findIndex(
                      (purchaseItem) => purchaseItem.id === found.id
                    );
                    copy[index].quantity += 1;
                    copy[index].itemPrice = copy[index].quantity * copy[index].price
                    setPurchase(copy);
                  }

                  let sumArray = purchase.map((item)=> item.itemPrice).reduce((prev, curr)=>{
                    return prev + curr
                  },0)
                  setTotal(sumArray);

                }}
              >
                add to cart
              </button>
            </div>
          ) : (
            ""
          )}
          {/* end of add to cart button */}

          {/* login/register button */}
          {!user ? (
            <div className="loginToShop">
              <Link to="/login">
                <button>login to shop</button>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* end of add to cart button */}
        </div>
        <hr />
        {/* end of mainTitle */}

        {/* img div */}
        <div className="imgDiv">
          <div className="img">
            <h3>image coming soon</h3>
          </div>
        </div>

        {/* item description */}
        <div className="text">
          <h3>Item Description</h3>
          <hr />

          <div
            dangerouslySetInnerHTML={{ __html: oneMerchItem?.description }}
            className="mainText"
          ></div>
        </div>
        <hr />
      </div>
      {/* end of title, image, item description */}

      {/* go to cart div */}
      {user && user.userCategory !== "admin" ? (
        <div className="goToCart">
          <Link to="/cart">
            <button>go to cart</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </StyledSingleMerchItem>
  );
};

export default SingleMerchItem;
