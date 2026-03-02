import React from "react";
import { WiDayCloudy, WiRain } from "react-icons/wi";
import { RxBookmarkFilled } from "react-icons/rx";

const Card = ({ data }) => {

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center gap-3">
        <p>Date</p>
        <h2>
          {data.name}, {data.sys.country}{" "}
        </h2>
        <h1>
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />{" "}
          | {data.main.temp}
        </h1>
        <p>{data.weather[0].main}</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility / 1000}km</p>
      </div>
    );
  } else {
    return <h1 className="text-center">Loading....</h1>;
  }
};

export default Card;
