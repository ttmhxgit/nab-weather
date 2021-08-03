import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Navbar from "../NavBar";

const renderEl = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

describe("NavBar", () => {
  test("render component navbar", () => {
    renderEl();
    expect(screen.getByRole("link", { name: /weather/i })).toBeInTheDocument();
    expect(screen.getByTestId(/github-link/i)).toBeInTheDocument();
  });
});