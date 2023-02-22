import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Nav() {
  return (
    <div className="bg-sky-600 py-3 flex items-center flex-col w-[100%] lg:flex-row px-5 gap-5">
      <Link to={"/"}>
        <p className=" text-gray-200 text-[1.8rem] lg:text-[2rem] font-[600] ">
          Weather App
        </p>
      </Link>
      <SearchBar />
    </div>
  );
}
