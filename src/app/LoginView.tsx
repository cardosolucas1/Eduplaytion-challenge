import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { login } from "./core/services/auth.service";
import "./LoginView.scss";

const LoginView: FC = (): JSX.Element => {
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  const [userProfile, setUserProfile] = useState({
    name: "",
    accountType: "",
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("Login :: useEffect");
  });

  const handleFormChange = (param: string) => (e: any) => {
    setFormObject({ ...formObject, [param]: e.target.value });
  };

  const navigate = useNavigate();
  console.log("starting request progress");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await login({
      email: formObject.username,
      password: formObject.password,
    })
      .then((result) => {
        console.log("result :: ", result);
        // TODO :: define de UserProfile State,
        // setState para ser replicado no Context later to be used in the profile pag

        navigate("/profile", {
          state: {
            userProfile: {
              name: result.accountData.firstName,
              accountType: result.accountData.accountType,
            },
          },
        });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        console.log("finally progress");
      });
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

        <h1>Login</h1>

        <form className="App-form" onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            value={formObject.username}
            placeholder="carlos54321@eduplaytion.no"
          />

          <input name="password" type="input" placeholder="123456" />

          {/* TODO :: Show just when have a value defined */}
          <section className="Profile-Logged">
            <ul>
              <li>
                {" "}
                Hey {userProfile.accountType} {userProfile.name}, welcome!
              </li>
            </ul>
          </section>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
