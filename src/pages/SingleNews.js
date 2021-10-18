import { useState, useEffect } from "react";
import { useParams } from "react-router";
import StyledSingleNews from "../style/StyledSingleNews";

const SingleNews = ({ allNewsArray }) => {
  let { id } = useParams();
  console.log(id);
  const [oneNews, setOneNews] = useState([]);

  let theOne = allNewsArray.find(function (item) {
    return item.id === Number(id);
  });

  useEffect(() => {
    setOneNews(theOne);
  }, [allNewsArray]);
  console.log(theOne);

  return (
    <StyledSingleNews>
      <div className="titleDiv">
        <h2>{oneNews?.title}</h2>
        <h3>{oneNews?.short_description}</h3>
        <hr />
      </div>

      <div className="imgDiv">
      <img src={oneNews?.main_image} alt="" className="img"/>
      </div>

      <div className="mainText"
        dangerouslySetInnerHTML={{ __html: oneNews?.article_content }}
      ></div>
    </StyledSingleNews>
  );
};

export default SingleNews;
