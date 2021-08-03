/* eslint-disable jest/no-mocks-import */
import React from "react";
import { cache } from "swr";
import { Router } from "react-router-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import { createMemoryHistory } from "history";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import { foreCastWeather } from "../../__mocks__/mock-forecast.mock";

const history = createMemoryHistory();

enableFetchMocks();

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole(/progressbar/i)], {
    timeout: 4000,
  });

const renderApp = () =>
  render(
    <Router history={history}>
      <App />
    </Router>
  );

describe("app render", () => {
  beforeEach(() => {
    cache.clear();
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(foreCastWeather));
  });

  test("fetch and render app", async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(screen.getByRole("link", { name: /weather/i })).toBeInTheDocument();

    const inputEl = screen.getByPlaceholderText(/type your location/i);
    expect(inputEl).toBeInTheDocument();
    fireEvent.change(inputEl, { target: { value: "New city" } });
    expect(inputEl.value).toBe("New city");

    expect(screen.getByText(/ho chi minh city, vn/i)).toBeInTheDocument();
    const forecast = screen.getAllByRole("listitem").map((listItem) => {
      return listItem.textContent;
    });
    expect(forecast).toMatchSnapshot(`
      Array [
        "MondayH 29°   L 26°",
        "TuesdayH 34°   L 26°",
        "WednesdayH 32°   L 26°",
        "ThursdayH 31°   L 25°",
        "FridayH 31°   L 25°",
        "SaturdayH 31°   L 26°",
      ]
    `);
  });

});
