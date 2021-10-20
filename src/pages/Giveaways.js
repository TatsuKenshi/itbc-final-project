import { useState, useEffect } from "react";
import Giveaway from "../components/Giveaway";
import Pagination from "../components/Pagination";
import { Redirect } from "react-router-dom";
import StyledGiveaways from "../style/StyledGiveaways";

const Giveaways = ({ allGiveawaysArray, user }) => {
  // pagination states
  const [displayed, setDisplayed] = useState(10);
  const [onPage, setOnPage] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  // pagination useEffect
  useEffect(() => {
    setOnPage(allGiveawaysArray.slice(0, displayed));
  }, [allGiveawaysArray, displayed]);

  return user ?
  <>
  <StyledGiveaways>
      <div className="title">
          <h1>Check our giveaways</h1>
        </div>
    </StyledGiveaways>

  {/* Pagination select 10, 20, or 30 items per page */}
  <Pagination
        displayArray={allGiveawaysArray}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setOnPage={setOnPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      {/* end of Pagination */}
      <div>
        {onPage.map(function (giveaway) {
          return <Giveaway key={giveaway.id} giveaway={giveaway} />;
        })}
      </div>
  </>
  :
  <Redirect to="/login" />
};

export default Giveaways;
