/* eslint-disable jest/no-mocks-import */
import * as ultils from "../../libs/utils";
import { foreCastWeather } from "../../__mocks__/mock-forecast.mock";


jest.mock('lodash-es/debounce', () => jest.fn(fn => fn));

describe("utils", () => {
  test("debounce", () => {
    jest.useFakeTimers();
    const test = jest.fn();
    const debounced = ultils.debounce(test, 1000);
    debounced();
    debounced();
  
    jest.runAllTimers();
    expect(test).toHaveBeenCalledTimes(1);
  });

  test("get max", () => {
    const max = ultils.getMax(foreCastWeather.list, "temp_max");
    expect(max).toBe(34);
  });

  test("get min", () => {
    const min = ultils.getMin(foreCastWeather.list, "temp_min");
    expect(min).toBe(25);
  });

  test("get properties", () => {
    const dataMapped = [
      {
        dt_txt: "2021-08-02 15:00:00",
        humidity: 84,
        max_temp: 29,
        min_temp: 26,
        weatherIcon: "https://openweathermap.org/img/w/04n.png",
      },
      {
        dt_txt: "2021-08-03 00:00:00",
        humidity: 83,
        max_temp: 34,
        min_temp: 26,
        weatherIcon: "https://openweathermap.org/img/w/04d.png",
      },
      {
        dt_txt: "2021-08-04 00:00:00",
        humidity: 85,
        max_temp: 32,
        min_temp: 26,
        weatherIcon: "https://openweathermap.org/img/w/04d.png",
      },
      {
        dt_txt: "2021-08-05 00:00:00",
        humidity: 87,
        max_temp: 31,
        min_temp: 25,
        weatherIcon: "https://openweathermap.org/img/w/04d.png",
      },
      {
        dt_txt: "2021-08-06 00:00:00",
        humidity: 85,
        max_temp: 31,
        min_temp: 25,
        weatherIcon: "https://openweathermap.org/img/w/04d.png",
      },
      {
        dt_txt: "2021-08-07 00:00:00",
        humidity: 81,
        max_temp: 31,
        min_temp: 26,
        weatherIcon: "https://openweathermap.org/img/w/04d.png",
      },
    ];
    const min = ultils.mapWeatherProperties(foreCastWeather);
    expect(min).toEqual(dataMapped);
  });
});
