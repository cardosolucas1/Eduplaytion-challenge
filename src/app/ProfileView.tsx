import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfileView.scss";

const ProfileView: FC = (): JSX.Element => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/login">Login</Link>
        </nav>
        <main></main>
      </header>
    </div>
  );
};

export default ProfileView;
