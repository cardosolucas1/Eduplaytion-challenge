import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./LoginView";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
