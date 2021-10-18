import { useState, useEffect } from "react";
import Game from "../components/Game";
import StyledSelect from "../style/StyledSelect";
import Pagination from "../components/Pagination";
import StyledSearchGames from "../style/StyledSearchGames";

const SearchGames = ({ allGamesArray }) => {
  // states for select, input, and games which will be displayed
  const [selectValue, setSelectValue] = useState([]);
  const [selectValue2, setSelectValue2] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);

  // pagination states
  const [displayed, setDisplayed] = useState(10);
  const [onPage, setOnPage] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  // useEffects for game selection
  // // // useEffect for the select menu
  useEffect(() => {
    if (selectValue === "all" || selectValue === "") {
      setDisplayGames(allGamesArray);
    } else {
      setDisplayGames(
        allGamesArray.filter(function (game) {
          return game.genre === selectValue;
        })
      );
    }
  }, [allGamesArray, selectValue]);

  // // // useEffect for the input search
  useEffect(() => {
    setDisplayGames(
      allGamesArray.filter(function (game) {
        return game.title.toLowerCase().includes(selectValue2);
      })
    );
  }, [allGamesArray, selectValue2]);

  // pagination useEffect
  useEffect(() => {
    setOnPage(displayGames.slice(0, displayed));
  }, [displayGames, displayed]);

  // game genres for the select menu
  let genres = [];
  allGamesArray.forEach(function (game) {
    genres.push(game.genre);
  });
  let myGenres = [...new Set(genres)];

  return (
    <>
      <StyledSelect>
        <div className="title">
          <h1>Browse our game library</h1>
        </div>

        <div className="browseGames">
          {/* select - search games by genre */}
          <div className="selectMenu">
            <select
              name="select"
              id="select"
              onChange={(e) => {
                setSelectValue(e.target.value);
                setCurrPage(1);
              }}
            >
              <option id="choose" value="choose">
                choose your favorite genre...
              </option>
              {myGenres.map(function (genre) {
                return (
                  <option key={genre} id={genre} value={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of select */}

          {/* input - search games by name */}
          <div className="inputSearch">
            <input
              type="text"
              placeholder="or search games by name..."
              onChange={(e) => {
                setSelectValue2(e.target.value);
                setCurrPage(1);
              }}
            />
          </div>
          {/* end of input - search games by name */}
        </div>
      </StyledSelect>

      {/* Pagination select 10, 20, or 30 items per page */}
      <Pagination
        displayArray={displayGames}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setOnPage={setOnPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      {/* end of Pagination */}

      <StyledSearchGames>
      {/* game display */}

      <div className="selectedGames">
        {onPage.map(function (game) {
          return <Game key={game.title} game={game} />;
        })}
      </div>
      {/* end of game display */}
        </StyledSearchGames>
    </>
  );
};

export default SearchGames;
