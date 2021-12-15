import React, { FC, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProfileView.scss";

const ProfileView: FC = (): JSX.Element => {
  const location = useLocation();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('location::', location);
  }, [location]);

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
        <main>
          <ul>
            <li> {location.state.userProfile.name} </li>
            <li> </li>
          </ul>
        </main>
      </header>
    </div>
  );
};

export default ProfileView;
