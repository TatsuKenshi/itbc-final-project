import { useState, useEffect } from "react";
import {
  allGames,
  allNews,
  allGiveaways,
  getAllMerch,
  getUserById,
} from "./Service";
import axios from "axios";
import Nav from "./components/Nav";
import StyledApp from "./style/StyledApp";
import Home from "./pages/Home";
import SearchGames from "./pages/SearchGames";
import SingleGame from "./pages/SingleGame";
import GameNews from "./pages/GameNews";
import SingleNews from "./pages/SingleNews";
import Giveaways from "./pages/Giveaways";
import SingleGiveaway from "./pages/SingleGiveaway";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Merch from "./pages/Merch";
import SingleMerchItem from "./pages/SingleMerchItem";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const BASENAME = "http://TatsuKenshi.github.io/itbc-final-project"

  // initial states
  // all game, all news, all giveaways states
  const [allGamesArray, setAllGamesArray] = useState([]);
  const [allNewsArray, setAllNewsArray] = useState([]);
  const [allGiveawaysArray, setAllGiveawaysArray] = useState([]);
  const [allMerchArray, setAllMerchArray] = useState([]);
  const [user, setUser] = useState(null);
  const [myFavoriteGames, setMyFavoriteGames] = useState([]);
  const [getFaves, setGetFaves] = useState(false);

  // useEffects
  // all games
  useEffect(() => {
    axios
      .request(allGames)
      .then(function (response) {
        setAllGamesArray(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // all news
  useEffect(() => {
    axios
      .request(allNews)
      .then(function (response) {
        setAllNewsArray(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // all giveaways
  useEffect(() => {
    axios
      .request(allGiveaways)
      .then(function (response) {
        setAllGiveawaysArray(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // all merch
  useEffect(() => {
    getAllMerch().then((res) => {
      setAllMerchArray(res.data);
    });
  }, []);

  // set user's favorite games
  useEffect(() => {
    if (user) {
      getUserById(user.id).then((res) => {
        setMyFavoriteGames(res.data.favoriteGames);
      });
    }
  }, [user]);

  // return with router
  return (
    <StyledApp>
      <Router>
        <Nav user={user}></Nav>
        <Switch>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/">
            <Home
              allGamesArray={allGamesArray}
              allNewsArray={allNewsArray}
              allGiveawaysArray={allGiveawaysArray}
              user={user}
              myFavoriteGames={myFavoriteGames}
            />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/games">
            <SearchGames allGamesArray={allGamesArray} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/games/:id">
            <SingleGame user={user} setMyFavoriteGames={setMyFavoriteGames} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/gamenews">
            <GameNews allNewsArray={allNewsArray} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/gamenews/:id">
            <SingleNews allNewsArray={allNewsArray} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/giveaways">
            <Giveaways allGiveawaysArray={allGiveawaysArray} user={user} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/giveaways/:id">
            <SingleGiveaway allGiveawaysArray={allGiveawaysArray} user={user} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/merch">
            <Merch
              allMerchArray={allMerchArray}
              setAllMerchArray={setAllMerchArray}
              user={user}
            ></Merch>
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/merch/:id">
            <SingleMerchItem user={user}></SingleMerchItem>
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/about">
            <About />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/register">
            <Register />
          </Route>
          <Route exact path="http://TatsuKenshi.github.io/itbc-final-project/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </StyledApp>
  );
}

export default App;
