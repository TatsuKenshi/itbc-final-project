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

export const getAllUsers = () => axios.get("http://localhost:3005/users");
export const getUserById = (id) =>
  axios.get(`http://localhost:3005/users/${id}`);
export const registerUser = (newUser) =>
  axios.post("hhttp://localhost:3005/users", newUser);

export const getAllMerch = () => axios.get("http://localhost:3005/merch");
export const getOneMerchItem = (id) =>
  axios.get(`http://localhost:3005/merch/${id}`);
export const newMerchItem = (
  itemName,
  category,
  quantity,
  price,
  shortDesc,
  description
) =>
  axios.post("http://localhost:3005/merch", {
    itemName,
    category,
    quantity,
    price,
    shortDesc,
    description,
  });

export const deleteMerchItem = (id) =>
  axios.delete(`http://localhost:3005/merch/${id}`);

export const addPurchase = (purchase, info) => axios.post(`http://localhost:3005/purchases`, {purchase, info})