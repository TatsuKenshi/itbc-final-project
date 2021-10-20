import StyledGame from "../style/StyledGame";
import { Link } from "react-router-dom";

const Game = ({ game }) => {

  return (
    <>
      <StyledGame>
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
            <button>
              view game
            </button>
          </Link>
        </div>
      </StyledGame>
    </>
  );
};

export default Game;
