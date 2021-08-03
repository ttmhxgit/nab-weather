const iconUrl = process.env.REACT_APP_ICON_URL;

export const debounce = (fn, ms) => {
  let timeoutId = 0;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

export const getMax = (arr, attr) => {
  return Math.max.apply(
    Math,
    arr.map((item) => Math.round(item.main[attr]))
  );
};

export const getMin = (arr, attr) => {
  return Math.min.apply(
    Math,
    arr.map((item) => Math.round(item.main[attr]))
  );
};

export const mapWeatherProperties = (data) => {
  const groupedDataByDate = data.list.reduce((days, row) => {
    const date = row.dt_txt.split(" ")[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  let forecast = [];

  for (let date of Object.keys(groupedDataByDate)) {
    forecast.push({
      max_temp: getMax(groupedDataByDate[date], "temp_max"),
      min_temp: getMin(groupedDataByDate[date], "temp_min"),
      humidity: getMax(groupedDataByDate[date], "humidity"),
      dt_txt: groupedDataByDate[date][0].dt_txt,
      weatherIcon: `${iconUrl}/${groupedDataByDate[date][0].weather[0].icon}.png`,
    });
  };

  return forecast;
};
