import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import StyledSingleGame from "../style/StyledSingleGame";
import { getUserById } from "../Service";

const SingleGame = ({ user, setUser, setMyFavoriteGames }) => {
  // one game state
  const [oneGame, setOneGame] = useState([]);

  // game id
  let { id } = useParams();

  // singleGame request
  const singleGame = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/game",
    params: { id: Number(id) },
    headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb",
    },
  };

  // singleGame useEffect
  useEffect(() => {
    axios
      .request(singleGame)
      .then(function (response) {
        setOneGame(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <StyledSingleGame>
      {/* title, image, game description */}
      <div className="main">
        <div className="mainTitle">
          {/* title */}
          <div className="titleDiv">
            <h2 className="title">{oneGame?.title}</h2>
          </div>

          {/* favorite button */}
          <div className="faveButton">
            {/* the button shows only if a user is logged in */}
            {user && user.userCategory !== "admin" ? (
              <button
                onClick={() => {
                  // is there a game with this id on the user's object in db
                  let found = user.favoriteGames.find(
                    (fave) => fave.id === Number(id)
                  );

                  // update the favoriteGames array on the user object
                  if (!found) {
                    let copy = user;
                    copy.favoriteGames.push({
                      id: Number(id),
                      title: oneGame.title,
                      thumbnail: oneGame.thumbnail,
                      developer: oneGame.developer,
                      publisher: oneGame.publisher,
                      genre: oneGame.genre,
                      platform: oneGame.platform,
                      release_date: oneGame.release_date,
                      short_description: oneGame.short_description,
                    });

                    setUser(copy);

                    // set myFavoriteGames to the new version of the favoriteGames array on the user object
                    setMyFavoriteGames(user.favoriteGames);

                    // update the user in the base
                    axios({
                      method: "put",
                      url: `https://itbc-final-project-db.herokuapp.com/users/${user.id}`,
                      data: {
                        id: user.id,
                        username: user.username,
                        userCategory: user.userCategory,
                        email: user.email,
                        password: user.password,
                        favoriteGames: user.favoriteGames,
                      },
                    });
                  }
                }}
              >
                Favorite
              </button>
            ) : (
              // if there is no logged in user
              ""
            )}
          </div>
          {/* end of favorite button */}
        </div>
        <hr />
        {/* end of mainTitle */}

        {/* img div */}
        <div className="imgDiv">
          <img
            src={
              oneGame.screenshots
                ? oneGame?.screenshots[0]?.image
                : oneGame?.thumbnail
            }
            alt=""
            className="img"
          />
        </div>

        {/* game description */}
        <div className="text">
          <h3>Game Description</h3>
          <hr />

          <div
            dangerouslySetInnerHTML={{ __html: oneGame?.description }}
            className="mainText"
          ></div>
        </div>
      </div>
      {/* end of title, image, game description */}

      {/* basic info section */}
      <div className="basicInfo">
        <h3>Basic Info</h3>
        <hr />

        <div className="basicInfoWrap">
          {/* basic info part 1 */}
          <div className="basicInfo1">
            <p>Developer: {oneGame?.developer}</p>
            <p>Publisher: {oneGame?.publisher}</p>
            <p>Release Date: {oneGame?.release_date}</p>
          </div>

          {/* basic info part 2 */}
          <div className="basicInfo2">
            <p>Platform: {oneGame?.platform}</p>
            <p>Genre: {oneGame?.genre}</p>
            <p>Status: {oneGame?.status}</p>
          </div>
        </div>
      </div>

      {/* end of basic info section */}

      {/* system requirements */}
      <div className="sysRequirements">
        <h3>System Requirements</h3>
        <hr />

        <div className="sysRequirementsWrap">
          {/* system requirements part 1 */}
          <div className="sysRequirements1">
            <p>Graphics: {oneGame?.minimum_system_requirements?.graphics}</p>
            <p>RAM: {oneGame?.minimum_system_requirements?.memory}</p>
            <p>OS: {oneGame?.minimum_system_requirements?.os}</p>
          </div>

          {/* system requirements part 2 */}
          <div className="sysRequirements2">
            <p>Processor: {oneGame?.minimum_system_requirements?.processor}</p>
            <p>Storage: {oneGame?.minimum_system_requirements?.storage}</p>
          </div>
        </div>
      </div>
      {/* end of system requirements */}
    </StyledSingleGame>
  );
};

export default SingleGame;
