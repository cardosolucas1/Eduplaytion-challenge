import React from "react";
import { render, screen } from "@testing-library/react";
import LoginView from "./LoginView";
import ReactTestUtils, { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

let container: ReactDOM.Container | null;

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container != null) {
    document.body.removeChild(container);
    container = null;
  }
});

it("can render and update a counter", () => {
  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginView />
      </MemoryRouter>,
      container
    );
  });

  if (container != null) {
    const atitle = container.querySelector("a");
    if (atitle) expect(atitle.textContent).toBe("Login");
  }
});
