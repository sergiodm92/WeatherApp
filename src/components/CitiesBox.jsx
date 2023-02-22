import React from "react";
import { useSelector } from "react-redux";
import CityCard from "./CityCard.jsx";
import Nav from "./Nav.jsx";

export default function CitiesBox() {
  let cities = useSelector((state) => state.cities);

  return (
    <>
    <Nav/>
    <div className="bg-sky-200 w-full h-[100%] py-[1.5vh] overflow-auto flex justify-center lg:justify-start lg:w-[99%] flex-wrap">
      {cities.length > 0 && cities.map((c,i) => <CityCard key={i}city={c} />)}
    </div>
    </>
  );
}
