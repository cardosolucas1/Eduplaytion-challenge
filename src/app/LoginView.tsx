import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "./core/services/auth.service";
import "./LoginView.scss";

const LoginView: FC = (): JSX.Element => {
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Login :: useEffect');
  });

  const handleFormChange = (param: string) => (e: any) => {
    setFormObject({ ...formObject, [param]: e.target.value });
  };

  console.log('starting request progress');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await login({
        email: formObject.username,
        password: formObject.password,
    }).then((result) => {
      console.log('result request progress');
      console.log('result :: ', result);
      // TODO :: define de UserProfile State,
      // setState para ser replicado no Context later to be used in the profile pag
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      console.log('finally progress');
    })
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/profile">Profile</Link>
          </nav>
        </header>

        <h1> Login </h1>

        <form className="App-form" onSubmit={handleSubmit}>
          <label>
            <input
              name="username"
              type="text"
              value={formObject.username}
              placeholder="username"
              onChange={handleFormChange("username")}
              required
            />
          </label>

          <label>
            <input
              name="password"
              type="input"
              value={formObject.password}
              placeholder="password"
              onChange={handleFormChange("password")}
              required
            />
          </label>

          <input type="Submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginView;
