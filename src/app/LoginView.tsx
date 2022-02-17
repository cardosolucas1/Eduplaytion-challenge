import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { login } from "./core/services/auth.service";
import "./LoginView.scss";

export interface Login {
  username: string;
  password: string;
}

const LoginView: FC = (): JSX.Element => {
  const [formObject, setFormObject] = useState<Login>({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setDisabled(false);
    setError("");
  }, []);

  useEffect(() => {
    console.log({ error });
  }, [error]);

  const handleFormChange = (event: any, inputName: string) => {
    setFormObject((oldState: Login) => ({
      ...oldState,
      [inputName]: event.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!formObject.password || !formObject.password) {
      setError("username or password can not be empty");
      return;
    } else {
      setDisabled(true);
      setError("Loading");

      await login({
        email: formObject.username,
        password: formObject.password,
      })
        .then(({ data }) => {
          navigate("/profile", {
            state: {
              userProfile: {
                name: data.accountData.firstName,
                accountType: data.accountData.accountType,
                avatarName: data.accountData.avatarName,
                createdAt: data.accountData.createdAt,
                subscriptionPlanId: data.accountData.subscriptionPlanId,
              },
            },
          });
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setDisabled(false);
        });
    }
  };

  return (
    <div className="App">
      <div className="App-container">
        <section className="Login">
          <form className="Login__Form" onSubmit={handleSubmit}>
            <h1 className="Login__Form__Title">Login</h1>
            <label className="Login__Form__Label" htmlFor="username">
              Name
            </label>
            <input
              className="Login__Form__Input"
              name="username"
              type="text"
              value={formObject.username}
              onChange={(e: any) => handleFormChange(e, "username")}
              placeholder="carlos54321@eduplaytion.no"
            />
            <label className="Login__Form__Label" htmlFor="password">
              Password
            </label>
            <input
              className="Login__Form__Input"
              name="password"
              type="input"
              onChange={(e: any) => handleFormChange(e, "password")}
              value={formObject.password}
              placeholder="123456"
            />
            {error !== "" && <p className="Login__Form__Error">{error}</p>}

            <input
              className="Login__Form__Submit"
              type="submit"
              style={{
                backgroundColor: `${
                  disabled ? "background: grey" : "rgb(99, 0, 190)"
                }`,
              }}
              disabled={disabled}
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginView;
