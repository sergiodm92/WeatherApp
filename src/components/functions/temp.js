export const tempColor = (city) => {
  return city.temp > -50 && city.temp < 0
    ? "bg-sky-600"
    : city.temp > 0 && city.temp < 10
    ? "bg-sky-500"
    : city.temp > 10 && city.temp < 20
    ? "bg-sky-400"
    : city.temp > 20 && city.temp < 30
    ? "bg-orange-400"
    : city.temp > 30 && city.temp < 40
    ? "bg-orange-600"
    : city.temp > 40
    ? "bg-red-600"
    : "bg-sky-600";
};

export const icon = (city) => {
  return city.temp > -50 && city.temp < 0
    ? "🥶"
    : city.temp > 0 && city.temp < 10
    ? "😨"
    : city.temp > 10 && city.temp < 20
    ? "😄"
    : city.temp > 20 && city.temp < 30
    ? "😎"
    : city.temp > 30 && city.temp < 40
    ? "🥵"
    : "🥵";
};
