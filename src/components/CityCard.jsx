import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCity } from "../redux/actions/actions";
import { tempColor,icon } from "./functions/temp";

export default function CityCard({ city }) {
  let dispatch = useDispatch();

  return (
    <div className=" hover:scale-[1.01] h-[270px] w-[70%] relative max-w-[270px] mt-[1.5vh] mb-[1.5vh] mr-[1.5vh] ml-[1.5vh] lg:mr-4 lg:ml-4 transition-all ">
      <button
        onClick={() => dispatch(deleteCity(city.id))}
        className=" hover:bg-red-900 hover:scale-[1.2] transition-all bg-black w-[25px] h-[25px] rounded-[20px] absolute top-[0px] left-[240px] text-gray-200 "
      >
        X
      </button>
      <Link to={`/${city.id}`}>
        <div
          className={`${tempColor(city)} h-full border-black rounded-[18px]  p-[10px] w-full border-[2px] flex flex-col items-center`}
        >
          <div className="h-200">
            <p>
              {city.name.slice(0, 29)}({city.country})
            </p>
          </div>

          <div className=" h-150">
            <img
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
              className="w-[120px] "
              alt={`${city.name} Weather`}
            />
          </div>

          <h3 className="text-[1rem] ">Temp: {city.temp + icon(city)}</h3>
          <div className="text-[1rem]  flex justify-between w-[94%] items-center">
            <h3 className="text-[1rem] ">H: {city.humidity}%</h3>
            <h3 className="text-[1rem] ">P: {city.pressure}</h3>
          </div>
          <div className="text-[1rem]  flex justify-between w-[94%] items-center">
            <p>Max: {city.max}°</p>
            <p>Min: {city.min}°</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
