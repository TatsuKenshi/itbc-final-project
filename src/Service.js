import axios from "axios"
// list of all games

export const allGames = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/games',
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': '9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb'
    }
  };

export const allNews = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/latestnews',
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': '9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb'
    }
  };

export const allGiveaways = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/giveaways',
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': '9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb'
    }
  };

  export const getAllUsers = () => axios.get("https://itbc-final-project-db.herokuapp.com/users")
  export const getUserById = (id) => axios.get(`https://itbc-final-project-db.herokuapp.com/users/${id}`)

  export const registerUser = (newUser) => axios.post("https://itbc-final-project-db.herokuapp.com/users", newUser)

  export const getAllMerch = () => axios.get("https://itbc-final-project-db.herokuapp.com/merch")
  export const getOneMerchItem = (id) => axios.get(`https://itbc-final-project-db.herokuapp.com/merch/${id}`)
  export const newMerchItem = (itemName, category, quantity, price, shortDesc, description) =>  axios.post("http://localhost:3005/merch", {itemName, category, quantity, price, shortDesc, description})



  /* export const singleGame = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/game',
    params: {id: '452'},
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': '9485859da0mshed03054c99da33fp14ae7ajsn2be7f4cedabb'
    }
  };
   */
  /* axios.request(singleGame).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  }); */