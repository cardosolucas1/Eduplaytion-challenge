import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginView.scss";

const LoginView: FC = (): JSX.Element => {

  // const [formObject, setFormObject] = useState({
  //   email: '',
  //   password: '',
  // });

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  // const validateForm = () => {
  //  //  const form: Form = formRef.current;
  // };

  // const handleFormChange = (param: string) => (e: any) => {
  //   // setFormObject({ ...formObject, [param]: e });
  // };

  // const handleSubmit = (e: SyntheticEvent<HTMLButtonElement, Event>) => {
  //   e.preventDefault();
  //   // validateForm();
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login { count } </h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
        <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <main>
       
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
       </main>
    </div>
  );
};

export default LoginView;
