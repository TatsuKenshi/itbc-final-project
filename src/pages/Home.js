import { useState, useEffect } from "react";
import StyledHome from "../style/StyledHome";
import img from "../img/homebckgrd.jpg";
import { Link } from "react-router-dom";
import Game from "../components/Game";
import FavoriteGame from "../components/FavoriteGame";

const Home = ({
  allGamesArray,
  allNewsArray,
  allGiveawaysArray,
  user,
  setUser,
  myFavoriteGames,
  setMyFavoriteGames
}) => {
  //featured game, news, and giveaway states
  const [featGame1, setFeatGame1] = useState([]);
  const [featNews1, setFeatNews1] = useState([]);
  const [featGiveaway1, setFeatGiveaway1] = useState([]);

  // featured game, news, and giveaway useEffects
  useEffect(() => {
    setFeatGame1(
      allGamesArray[Math.floor(Math.random() * allGamesArray.length)]
    );
  }, [allGamesArray]);

  useEffect(() => {
    setFeatNews1(allNewsArray[Math.floor(Math.random() * allNewsArray.length)]);
  }, [allNewsArray]);

  useEffect(() => {
    setFeatGiveaway1(
      allGiveawaysArray[Math.floor(Math.random() * allGiveawaysArray.length)]
    );
  }, [allGiveawaysArray]);

  return user && user.userCategory !== "admin" ? (
    <StyledHome>
      <div className="myFavorites">
        <h1>My favorite games</h1>
        <div>
          {myFavoriteGames.map((favorite) => {
            return <FavoriteGame key={favorite.id} game={favorite} user={user} setUser={setUser} myFavoriteGames={myFavoriteGames} setMyFavoriteGames={setMyFavoriteGames}/>;
          })}
        </div>
      </div>
    </StyledHome>
  ) : (
    <>
      <StyledHome>
        <div className="banner">
          {/* banner image */}
          <img src={img} alt="" className="bannerImage" />

          {/* title */}
          <div className="title">
            <h1>MY FREE GAMES</h1>
            <h2>Welcome to the web's hottest free MMO game search hub</h2>
          </div>

          <div className="featuredContent">
            {/* featured game */}
            <div className="featuredGame">
              <div className="featuredGame1">
                <h2 className="featTitle">{featGame1?.title}</h2>
                <img src={featGame1?.thumbnail} alt="" className="featImg" />
                <h3>Platform: {featGame1?.platform}</h3>
                <h3>Genre: {featGame1?.genre}</h3>
                {featGame1 ? (
                  <Link to={`/games/${featGame1.id}`}>
                    <button className="featBtn">view game</button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* featured news */}
            <div className="featuredNews">
              <div className="featuredNews1">
                <h2 className="featTitle">{featNews1?.title}</h2>
                <img src={featNews1?.thumbnail} alt="" className="featImg" />
                <div>
                  <h3>{featNews1?.short_description}</h3>
                  {featNews1 ? (
                    <Link to={`/gamenews/${featNews1.id}`}>
                      <button className="featBtn">read more</button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {/* featured giveaway */}
            <div className="featuredGiveaways">
              <div className="featuredGiveaway1">
                <h2 className="featTitle">{featGiveaway1?.title}</h2>
                <img
                  src={featGiveaway1?.thumbnail}
                  alt=""
                  className="featImg"
                />
                <h3>Keys left: {featGiveaway1?.keys_left}</h3>
                <div>
                  {featGiveaway1 ? (
                    <Link to={`/login`}>
                      <button className="featBtn">see giveaway</button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
