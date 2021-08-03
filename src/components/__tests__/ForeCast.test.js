/* eslint-disable jest/no-mocks-import */
import React from "react";
import { cache } from "swr";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ForecastCard from "../ForeCast";
import { enableFetchMocks } from "jest-fetch-mock";
import { foreCastWeather } from "../../__mocks__/mock-forecast.mock";

enableFetchMocks();

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole(/progressbar/i)], {
    timeout: 4000,
  });

const testProps = {
  location: "saigon",
};

const renderForecast = (testProps) => render(<ForecastCard {...testProps} />);

describe("ForecastCard", () => {
  beforeEach(() => {
    cache.clear();
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(foreCastWeather));
  });

  test("renders forecast for location", async () => {
    renderForecast(testProps);

    await waitForLoadingToFinish();

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
