import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneMerchItem } from "../Service";
import StyledSingleMerchItem from "../style/StyledSingleMerchItem";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleMerchItem = ({ user }) => {
  // one merch item state
  const [oneMerchItem, setOneMerchItem] = useState([]);
  console.log(oneMerchItem);

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
                  // we update the shoppingCart state with this item
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
              <Link to="http://TatsuKenshi.github.io/itbc-final-project/login">
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
          <Link to="http://TatsuKenshi.github.io/itbc-final-project/cart">
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
