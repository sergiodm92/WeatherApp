import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityInfo } from "../redux/actions/actions";
import wind from "../utils/windimage.png";
import visibility from "./functions/visibility.js";
import { tempColor } from "./functions/temp";
import { useParams } from "react-router";

export default function CityInfo() {
  let id = useParams().id
  let dispatch = useDispatch();
 
  const cities = useSelector((state) => state.cities);
  let city = cities.find((c)=>c.id==id)

  return (
    <>
        <div className="bg-sky-600 py-3 flex items-center flex-col w-[100%] lg:flex-row px-5 gap-5">
        <p className=" text-gray-200 text-[1.8rem] lg:text-[2rem] font-[600] ">
          Weather App
        </p>
    </div>
    <div className=" w-[90%] flex items-center justify-center">
      <div
        className={`${tempColor(city)}  border-black rounded-[18px] p-[10px] border-[2px] flex flex-col items-center justify-between`}
      >
        <div className="w-[90%]  flex items-center gap-12 ">
          <div>
            <h1 className="text-[1.5rem] max-sm:text-[1.2rem] font-[600]">
              {city.name}
            </h1>
            <h3 className="text-[1rem] max-sm:text-[0.8rem]">
              ({city.country})
            </h3>
          </div>
          <div>
            <img
              className="w-[160px]"
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
              alt={`${city.description} Weather`}
            />
          </div>
          <div>
            <img
              className=" h-[50px]"
              src={wind}
              alt={`${city.description} Weather`}
            />
            <p className="w-full flex max-sm:text-[0.9rem]">
              wind: {(city.wind.speed * 3.6).toFixed(2)}km/h{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex max-sm:text-[0.85rem]">
          <div className="h-36  w-[50%]">
            <div className="flex">
              <p>
                <b>Act Temp:</b> {city.temp}??{" "}
              </p>
            </div>
            <div className="flex" w-full>
              <p>
                <b>Max:</b> {city.max}??{" "}
              </p>
            </div>
            <div className="flex" w-full>
              <p>
                <b>Min:</b> {city.min}??{" "}
              </p>
            </div>
            <div className="flex">
              <p>
                <b>Feels Like:</b> {city.feels_like}??{" "}
              </p>
            </div>
            <div className="flex">
              <p><b>Description:</b> {city.description} </p>
            </div>
          </div>
          <div className="h-36 w-[50%]">
            <div className="flex">
              <p><b>H:</b> {city.humidity}% </p>
            </div>
            <div className="flex" w-full>
              <p><b>P:</b> {city.pressure}Atm </p>
            </div>
            <div className="flex" w-full>
              <p><b>Min:</b> {city.min}?? </p>
            </div>
            <div className="flex">
              <p><b>Clouds:</b> {city.clouds}% </p>
            </div>
            <div className="flex">
              <p><b>Visibility:</b> {visibility(city.visibility)} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
