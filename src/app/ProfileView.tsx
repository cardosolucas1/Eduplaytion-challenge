import React, { FC, useEffect } from "react";
import { Link, useLocation, Location } from "react-router-dom";
import "./ProfileView.scss";

export interface ProfileViewLocation extends Location {
  state: {
    userProfile: {
      name: string;
      avatarName: string;
      accountType: string;
      createdAt: string;
      subscriptionPlanId: string;
    };
  };
}
const ProfileView: FC = (): JSX.Element => {
  const location = useLocation() as ProfileViewLocation;

  useEffect(() => {
    console.log("location::", location);
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
      </header>
      <main>
        <ul>
          <li> {location.state.userProfile.name} </li>
          <li> {location.state.userProfile.accountType} </li>
          <li> {location.state.userProfile.createdAt} </li>
          <li> {location.state.userProfile.avatarName} </li>
          <li> {location.state.userProfile.subscriptionPlanId} </li>
        </ul>
      </main>
    </div>
  );
};

export default ProfileView;
