import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../Service";
import StyledLogin from "../style/StyledLogin";

const Login = ({ setUser, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const history = useHistory();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  return (
    <StyledLogin>
        <div className="text">
          <h2>Log in</h2>
        </div>

      <div className="main">
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            getAllUsers().then((res) => {
              let user = res.data.find(
                (el) => el.username === username && el.password === password
              );
              if (user) {
                setUser(user);
                history.push("/");
              } else {
                setError("Wrong data. Invalid username or password.");
              }
            });
          }}
        >
          <div className="inputUser">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="inputPassword">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="inputBtn">
            <input type="submit" />
          </div>
        </form>
      </div>

      <div className="regLink">
        <Link to="/register"><h3>Not registered?</h3></Link>
      </div>

      <div className="errorDiv">
        <h3>{error? error : ""}</h3>
      </div>
    </StyledLogin>
  );
};

export default Login;
