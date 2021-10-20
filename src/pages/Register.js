import { useState } from "react";
import { useHistory } from "react-router";
import { getAllUsers, registerUser } from "../Service";
import StyledRegister from "../style/StyledRegister";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const validPassword = (password) =>
    password.length >= 8 &&
    password
      .split("")
      .some(
        (char) => (char >= "A" && char <= "Z") || (char >= "a" && char <= "z")
      ) &&
    password.split("").some((char) => !isNaN(Number(char)));

  return (
    <StyledRegister>
      <div className="instructions">
        <p>Username has to be at least four letters long</p>
        <p>Email has to be in the valid format</p>
        <p>
          Password has to be at least 8 characters long, and contain a letter
          and a number
        </p>
      </div>

      <div className="text">
        <h2>Register</h2>
      </div>

      <div className="main">
        <form
        className="registrationForm"
          onSubmit={(e) => {
            e.preventDefault();
            if (username.length < 4 && !validPassword(password)) {
              setError(
                `Invalid data. Try again.
              `
              );
              return;
            }

            let newUser = {
              username: username,
              userCategory: "user",
              email: email,
              password: password,
              favoriteGames: [],
            };

            getAllUsers().then((res) => {
              if (
                !res.data.some(
                  (user) =>
                    user.username === username ||
                    user.email === email ||
                    user.password === password
                )
              ) {
                registerUser(newUser).then((res) => {
                  console.log(res.data);
                  history.push("/login");
                });
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

            <div className="inputEmail">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
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

      <div className="errorDiv">
        <h3>{error? error : ""}</h3>
      </div>
    </StyledRegister>
  );
};

export default Register;
