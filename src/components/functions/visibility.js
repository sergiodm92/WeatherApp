const visibility = (value) => {
  return value <= 25
    ? "super dense mist"
    : value <= 50 && value > 25
    ? "very dense mist"
    : value <= 100 && value > 50
    ? "thick mist"
    : value <= 500 && value > 100
    ? "very poor visibility"
    : value <= 1000 && value > 500
    ? "poor visibility"
    : value <= 4000 && value > 1000
    ? "haze"
    : value <= 10000 && value > 4000
    ? "moderate visibility"
    : value <= 20000 && value > 10000
    ? "good visibility"
    : value < 50000 && value > 20000
    ? "very good visibility"
    : "excellent visibility";
};

export default visibility;
