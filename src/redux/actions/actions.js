

export const getCity = (city)=> {
  return (dispatch) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=921be36c5c26e069b79dd38df93dfc86&units=metric`
    )
      .then((response) => 
        response.json())
  
      .then((city) => {
        if (city.name === undefined) {
          return dispatch({ type: "CITY_NOT_FOUND" });
        } else {
          const newCity = {
            lon: city.coord.lon,
            lat: city.coord.lat,
            visibility: city.visibility,
            wind: city.wind,
            clouds: city.clouds.all,
            weather: city.weather[0].main,
            description: city.weather[0].description,
            img: city.weather[0].icon,
            temp: city.main.temp,
            min: city.main.temp_min,
            max: city.main.temp_max,
            feels_like: city.main.feels_like,
            pressure: city.main.pressure,
            humidity: city.main.humidity,
            country: city.sys.country,
            name: city.name,
            id: city.id,
          };
          dispatch({ type: "GET_CITY", payload: newCity });
        }
      });
  };
}

export const deleteCity = (id) => {
  return { type: "DELETE_CITY", payload: id };
}

export const getCityInfo = (id) => {
  return { type: "GET_CITY_INFO", payload: id };
}
