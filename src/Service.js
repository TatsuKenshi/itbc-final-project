import axios from "axios";
// list of all games

export const allGames = {
  method: "GET",
  url: "https://mmo-games.p.rapidapi.com/games",
  headers: {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb",
  },
};

export const allNews = {
  method: "GET",
  url: "https://mmo-games.p.rapidapi.com/latestnews",
  headers: {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb",
  },
};

export const allGiveaways = {
  method: "GET",
  url: "https://mmo-games.p.rapidapi.com/giveaways",
  headers: {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb",
  },
};

export const getAllUsers = () => axios.get("https://itbc-final-project-db.herokuapp.com/users");
export const getUserById = (id) =>
  axios.get(`https://itbc-final-project-db.herokuapp.com/users/${id}`);
export const registerUser = (newUser) =>
  axios.post("https://itbc-final-project-db.herokuapp.com/users", newUser);

export const getAllMerch = () => axios.get("https://itbc-final-project-db.herokuapp.com/merch");
export const getOneMerchItem = (id) =>
  axios.get(`https://itbc-final-project-db.herokuapp.com/merch/${id}`);
export const newMerchItem = (
  itemName,
  category,
  quantity,
  price,
  shortDesc,
  description
) =>
  axios.post("https://itbc-final-project-db.herokuapp.com/merch", {
    itemName,
    category,
    quantity,
    price,
    shortDesc,
    description,
  });

export const deleteMerchItem = (id) =>
  axios.delete(`https://itbc-final-project-db.herokuapp.com/merch/${id}`);

export const addPurchase = (purchase, info) => axios.post(`https://itbc-final-project-db.herokuapp.com/purchases`, {purchase, info})