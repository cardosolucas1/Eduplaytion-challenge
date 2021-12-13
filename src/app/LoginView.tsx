import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginView.scss";

const LoginView: FC = (): JSX.Element => {
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const handleFormChange = (param: string) => (e: any) => {
    setFormObject({ ...formObject, [param]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("handleSubmit::", handleSubmit);
    console.log("formObject:: ", formObject);

    // Validade the form
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
