import { Link } from "react-router-dom";
import { getUserById } from "../Service";
import StyledFavoriteGame from "../style/StyledFavoriteGame";
import axios from "axios";

const FavoriteGame = ({ game, user, setUser, myFavoriteGames, setMyFavoriteGames }) => {
  return (
    <>
      <StyledFavoriteGame>
        <div className="main">
          <h2>{game.title}</h2>
          <img src={game.thumbnail} alt="" />
        </div>
        <div className="info">
          <p>
            Developer: {game.id} {game.developer}
          </p>
          <p>Publisher: {game.publisher}</p>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
          <p>Release Date: {game.release_date}</p>
          <p>Short Description: {game.short_description}</p>
          <Link to={`/games/${game.id}`}>
            <button>view game</button>
          </Link>
          <button
            onClick={() => {

                // kick the unfavorited game from the favoriteGames array on the logged in user's object
              let copy = user;
              let index = copy.favoriteGames.findIndex(
                (item) => item.id === game.id
              );
              copy.favoriteGames.splice(index, 1);
              setUser(copy);

              // update the myFavoriteGames array
              setMyFavoriteGames(user.favoriteGames);

              // update the user in the base
              axios({
                method: "put",
                url: `https://itbc-final-project-db.herokuapp.com/${user.id}`,
                data: {
                  id: user.id,
                  username: user.username,
                  userCategory: user.userCategory,
                  email: user.email,
                  password: user.password,
                  favoriteGames: user.favoriteGames,
                },
              });
            }}
          >
            unfavorite
          </button>
        </div>
      </StyledFavoriteGame>
    </>
  );
};

export default FavoriteGame;
