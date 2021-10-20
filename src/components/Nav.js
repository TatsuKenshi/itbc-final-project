import StyledNav from "../style/StyledNav";
import { Link } from "react-router-dom";
import img from "../img/logo.png"

const Nav = ({user}) => {
  return (
    <StyledNav>
        
      <div>
        <Link to="/"><img src={img} alt="" width="60px" height="60px" /></Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/games">Search Games</Link>
      </div>
      <div>
        <Link to="/gamenews">Game News</Link>
      </div>
      <div>
        <Link to="/giveaways">Giveaways</Link>
      </div>
      <div>
        <Link to="/merch">Merch</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
        {user? "" : <div><Link to="/login">Login</Link></div> }
        {user? "" : <div><Link to="/register">Register</Link></div> }
        {user? <div>{user?.username}</div> : "" }
    </StyledNav>
  );
};

export default Nav;
