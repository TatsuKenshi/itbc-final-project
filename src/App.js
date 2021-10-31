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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Merch from "./pages/Merch";
import SingleMerchItem from "./pages/SingleMerchItem";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // initial states
  // all game, all news, all giveaways states
  const [allGamesArray, setAllGamesArray] = useState([]);
  const [allNewsArray, setAllNewsArray] = useState([]);
  const [allGiveawaysArray, setAllGiveawaysArray] = useState([]);
  const [allMerchArray, setAllMerchArray] = useState([]);
  const [user, setUser] = useState(null);
  const [myFavoriteGames, setMyFavoriteGames] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [total, setTotal] = useState([]);

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
  }, [user, myFavoriteGames]);

  useEffect(() => {
    if(user){
      setPurchase([])
    }
  }, [])

  useEffect(() => {
    setTotal(purchase.map((item)=> item.itemPrice).reduce((prev, curr)=>{
      return prev + curr
    },0))
  }, [purchase])

  // return with router
  return (
    <StyledApp>
      <Router>
        <Nav user={user} setUser={setUser} purchase={purchase}></Nav>
        <Switch>
          <Route exact path="/">
            <Home
              allGamesArray={allGamesArray}
              allNewsArray={allNewsArray}
              allGiveawaysArray={allGiveawaysArray}
              user={user}
              setUser={setUser}
              myFavoriteGames={myFavoriteGames}
              setMyFavoriteGames={setMyFavoriteGames}
            />
          </Route>
          <Route exact path="/games">
            <SearchGames allGamesArray={allGamesArray} />
          </Route>
          <Route exact path="/games/:id">
            <SingleGame
              user={user}
              setMyFavoriteGames={setMyFavoriteGames}
              setUser={setUser}
            />
          </Route>
          <Route exact path="/gamenews">
            <GameNews allNewsArray={allNewsArray} />
          </Route>
          <Route exact path="/gamenews/:id">
            <SingleNews allNewsArray={allNewsArray} />
          </Route>
          <Route exact path="/giveaways">
            <Giveaways allGiveawaysArray={allGiveawaysArray} user={user} />
          </Route>
          <Route exact path="/giveaways/:id">
            <SingleGiveaway allGiveawaysArray={allGiveawaysArray} user={user} />
          </Route>
          <Route exact path="/merch">
            <Merch
              allMerchArray={allMerchArray}
              setAllMerchArray={setAllMerchArray}
              user={user}
              purchase={purchase}
              setPurchase={setPurchase}
              total={total}
              setTotal={setTotal}
            ></Merch>
          </Route>
          <Route exact path="/merch/:id">
            <SingleMerchItem
              user={user}
              purchase={purchase}
              setPurchase={setPurchase}
              total={total}
              setTotal={setTotal}
            ></SingleMerchItem>
          </Route>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart
            user={user}
              purchase={purchase}
              setPurchase={setPurchase}
              total={total}
              setTotal={setTotal}
            />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </StyledApp>
  );
}

export default App;
