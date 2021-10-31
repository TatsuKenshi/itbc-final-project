import StyledNav from "../style/StyledNav";
import { Link, useHistory } from "react-router-dom";
import img from "../img/logo.png"

const Nav = ({user, setUser, purchase}) => {
  const history = useHistory();

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
      {user && user.userCategory !=="admin"? <div><Link to="/cart">Cart {purchase.length > 0 ? purchase.length : ""}</Link></div> : ""}
        {user? <button className="logOutBtn" onClick={()=>{
          setUser(null);
          history.push("/");
        }}>Logout</button> : <div><Link to="/login">Login</Link></div> }
        {user? "" : <div><Link to="/register">Register</Link></div> }
        {user? <div>{user?.username}</div> : "" }
    </StyledNav>
  );
};

export default Nav;
