const API_KEY = "2915ce5b8d2735204f8a2d49c9510b33";

const getWeather = async () => {
  const city = `${document.getElementById("cityInput").value}`;
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  const parsedData = await data.json();
  console.log(parsedData);
};
