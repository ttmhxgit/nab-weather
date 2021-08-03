import React from "react";
import dayjs from "dayjs";
import useWeather from "../hooks/useWeather";
import Loading from "./Loading";

const Forecast = ({ location }) => {
  const { forecast, isLoading, isError, city } = useWeather("forecast", location);

  if (isLoading || isError) return <Loading />;
  return (
    <div className="m-4">
      <div className="py-4">
        <p className="tracking-wide text-2xl font-semibold">
          {city.name}, {city.country}
        </p>
      </div>
      <ul className="py-3 flex flex-col lg:flex-row text-gray-500 p-1 justify-between">
        {forecast.map((item, index) => {
          return (
            <li className="p-2 flex-1 flex flex-row lg:flex-col justify-between lg:border-r last:border-r-0 border-gray-300 items-center lg:items-stretch " key={index}>
              <span className="flex-1 text-left">
                {dayjs(item.dt_txt).format("dddd")}
              </span>
              <span>
                <img src={item.weatherIcon} alt="icon" />
              </span>
              <span className="flex-1 text-right">
                H {item.max_temp}&deg;
                &nbsp;
                L {item.min_temp}&deg;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forecast;
