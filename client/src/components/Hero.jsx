import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full bg-blue-800 top-0 left-0 absolute opacity-20"></div>
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-30">
        <div className="text-6xl  font-bold text-white">
          HAPPY NEW YEAR
        </div>
        <div className="text-2xl text-white">
          Plan this new year with a campaign
        </div>
      </div>
      <img src="https://wallpaperaccess.com/full/2977115.jpg" />
    </div>
  );
};

export default Hero;
