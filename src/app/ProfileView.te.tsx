import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileView from "./ProfileView";

test("renders learn react link", () => {
  render(<ProfileView />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();
});
