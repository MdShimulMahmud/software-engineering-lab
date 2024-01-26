import React from "react";
import { useNavigate } from "react-router-dom";
import Caraosel from "./Carousel/carasol";

import { useDispatch } from "react-redux";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate("/home");
  };

  let slides = [
    "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU",
    "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSQ69jQfXUnTCgxvqI3vPFQXbhFvjEsrCpaJg93TaPToPajR-WLog6wKi1_duCqj-1YSNmMR8TJVFNy4yniXcE",
    "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRkXBpCv0_aA9rtR69FyYsewBE9MJXUSVwfCh0y-gvEUd6xPRdILqtUAiqaw1QoiK5q98rAAmEBmQLWGrlUmtE",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#F9F3F2] ">
      <div className="relative flex justify-end ">
        {" "}
        {/* Use flex container for alignment */}
        <div className="w-[60%] pt-11 text-right">
          {" "}
          {/* Align text to the right */}
          <Caraosel slides={slides} />
        </div>
        <div className="absolute bottom-4 left-8 w-[30%] text-left ">
          {" "}
          {/* Further adjust left margin */}
          <div className=" text-lg text-gray-600 font-semibold text-center ">
            {" "}
            {/* Center the text */}
            <h2 className="text-xl font-bold">Rent Your Dream Home</h2>
            <p>
              Discover a collection of beautiful homes for rent. Find the
              perfect place to call home for your next adventure.
            </p>
          </div>
          <button
            onClick={goHome}
            className="text-white bg-custom1 rounded-lg text-xl font-semibold shadow-md hover:bg-custom2 transition duration-300  "
          >
            Go Explore Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
