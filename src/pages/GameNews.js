import { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import Pagination from "../components/Pagination";
import StyledGameNews from "../style/StyledGameNews";

const GameNews = ({ allNewsArray }) => {
  // pagination states
  const [displayed, setDisplayed] = useState(10);
  const [onPage, setOnPage] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  // pagination useEffect
  useEffect(() => {
    setOnPage(allNewsArray.slice(0, displayed));
  }, [allNewsArray, displayed]);

  return (
    <>
    <StyledGameNews>
      <div className="title">
          <h1>Read latest news</h1>
        </div>
    </StyledGameNews>

      {/* Pagination select 10, 20, or 30 items per page */}
      <Pagination
        displayArray={allNewsArray}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setOnPage={setOnPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      {/* end of Pagination */}
      <div>
        {onPage.map(function (news) {
          return <NewsItem key={news.id} news={news} />;
        })}
      </div>
    </>
  );
};

export default GameNews;
