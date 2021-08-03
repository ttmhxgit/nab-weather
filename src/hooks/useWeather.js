import fetcher from "../libs/fetcher";
import useSWR from "swr";
import { mapWeatherProperties } from "../libs/utils";

const apiKey = process.env.REACT_APP_API_KEY;


const useWeather =  (endpoint, location) => {
  const { data, error } =  useSWR(
    `/${endpoint}/?q=${location}&units=metric&APPID=${apiKey}`,
    fetcher
  );

  return {
    forecast: data?.list ? mapWeatherProperties(data) : [],
    city: data?.city || null,
    isLoading: !data,
    isError: error,
  };
};

export default useWeather;
