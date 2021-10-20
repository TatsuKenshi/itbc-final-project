import StyledNav from "../style/StyledNav";
import { Link } from "react-router-dom";
import img from "../img/logo.png"

const Nav = ({user}) => {
  return (
    <StyledNav>
        
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/"><img src={img} alt="" width="60px" height="60px" /></Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/">Home</Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/games">Search Games</Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/gamenews">Game News</Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/giveaways">Giveaways</Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/merch">Merch</Link>
      </div>
      <div>
        <Link to="http://TatsuKenshi.github.io/itbc-final-project/about">About</Link>
      </div>
        {user? "" : <div><Link to="http://TatsuKenshi.github.io/itbc-final-project/login">Login</Link></div> }
        {user? "" : <div><Link to="http://TatsuKenshi.github.io/itbc-final-project/register">Register</Link></div> }
        {user? <div>{user?.username}</div> : "" }
    </StyledNav>
  );
};

export default Nav;
