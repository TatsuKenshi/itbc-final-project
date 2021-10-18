import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import StyledSingleGiveaway from "../style/StyledSingleGiveaway";
import { Link } from "react-router-dom";

const SingleGiveaWay = ({ allGiveawaysArray, user }) => {
  let { id } = useParams();
  console.log(id);
  const [oneGiveaway, setOneGiveaway] = useState([]);

  let theOne = allGiveawaysArray.find(function (item) {
    return item.id === Number(id);
  });

  useEffect(() => {
    setOneGiveaway(theOne);
  }, [allGiveawaysArray]);
  console.log(theOne);

  return user ? (
    <StyledSingleGiveaway>
      <div className="linkBtn">
        <Link to={oneGiveaway?.giveaway_url}>
          <button className="theBtn">go to giveaway</button>
        </Link>
      </div>
      <hr />

      <div className="titleDiv">
        <h2>{oneGiveaway?.title}</h2>
        <h3>{oneGiveaway?.short_description}</h3>
        <hr />
      </div>

      <div className="imgDiv">
        <img src={oneGiveaway?.main_image} alt="" className="img" />
      </div>
      <hr />

      <div className="mainText">
        <h3>Keys left: {oneGiveaway?.keys_left}</h3>
      </div>
    </StyledSingleGiveaway>
  ) : (
    <Redirect to="/login" />
  );
};

export default SingleGiveaWay;
