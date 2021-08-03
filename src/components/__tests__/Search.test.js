import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Search from "../Search";

const mockProps = {
  location: "Test Location",
  onLocationChange: () => {},
  isSearching: false,
};

const renderEl = (props) => render(<Search {...props} />);

describe("Search", () => {
  test("render component search loading", () => {
    renderEl(mockProps);
    expect(
      screen.getByPlaceholderText(/type your location/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/loading search/i)).not.toBeInTheDocument();
  });

  test("render component search not loading", () => {
    renderEl({ ...mockProps, isSearching: true });
    expect(screen.queryByText(/loading search/i)).toBeInTheDocument();
  });

  test("input search change", () => {
    renderEl(mockProps);

    const inputEl = screen.getByPlaceholderText(/type your location/i);

    fireEvent.change(inputEl, { target: { value: "New city" } });
    expect(inputEl.value).toBe("New city");
  });
});
