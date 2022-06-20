import { Carousel } from 'react-responsive-carousel';


import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

function App2() {
  const data = [
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },

    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
    {
      image: "a2.png",
      caption: "Modular Kitchen",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "10px",
    fontWeight: "bold",
  };
  const captionStyle1 = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle1 = {
    fontSize: "10px",
    fontWeight: "bold",
  };
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;
  return (
    <div className="App">
      <div className="md:grid md:grid-flex-row md:grid-cols-2 z-index-0">
      <div className="carousel-wrapper md:w-3/4 w-full  md:ml-8 md:mt-8">
            <Carousel>
                <div>
                    <img src="kit.png" />
                </div>
                <div>
                    <img src="kit.png" />
                </div>
                <div>
                    <img src="kit.png" />
                </div>
            </Carousel>
        </div>

        <div className="md:mt-8 text-xl pb-5">
          <h1 className="font-semibold md:text-3xl ml-3 mt-3 md:text-xxl text-lg">
            A Modular Kitchen Design with a Tiled Backsplash
          </h1>
          <h1 className="font-bold ml-3"></h1>
          <div className="md:grid md:grid-cols-3 grid grid-flex-row grid-cols-2 hidden">
            <div className="md:pb-15 font-semibold ml-3 text-lg">
              <h1 className="pb-8 pt-14">Size</h1>
              <h1 className="pb-8 pl-1 md:ml-1">Shape</h1>
              <h1 className="pb-8 md:ml-1">Color</h1>

              <h1 className="pb-10 md:pl-6">Features</h1>
              <h1 className="pb-8 md:pl-9 md:ml-6 md:pt-3">Specifications</h1>
            </div>
            <div className="text-lg">
              <h1 className="md:pt-4 md:pt-0 mt-9 pt-5 md:ml-1">11x12"</h1>
              <h1 className="pt-9 md:pl-12 md:ml-8">Modular Kitchen</h1>
              <div className="md:grid md:grid-cols-4 grid grid-flex-row grid-cols-5 md:pt-10 pt-8 md:pl-10 md:ml-10">
                <div className="bg-white"></div>
                <div className="  h-6 w-9 bg-blue-700"></div>
                <div className="h-6 w-9 bg-teal-600"></div>
                <div className="h-6 w-9 bg-yellow-600"></div>
              </div>
              <h1 className="md:mt-8 mt-8 md:ml-12 md:pl-6">20% Extra price</h1>
              <p className="md:ml-12 md:pl-9">10 years warrenty</p>
              <h1 className="md:mt-5 mt-5 md:ml-12 md:pl-4">Green Plywood</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flex-row grid-cols-3 mt-6 md:hidden">
            <div className="text-lg">
              <h1>Size</h1>
              <h1 className="ml-3 mt-7">Shape</h1>
              <h1 className="ml-1 mt-6">Color</h1>
            </div>
            <div className="text-lg">
              <h1 className="text-lg">11x12"</h1>
              <h1 className="ml-3 mt-2">L Shape Kitchen</h1>
              <div className="md:grid md:grid-cols-4 grid grid-flex-row grid-cols-5 md:pt-10 pt-8 md:pl-10 md:ml-10">
                <div className="bg-white ml-3"></div>
                <div className=" ml-3 h-4 w-4 bg-blue-700"></div>
                <div className="ml-3 h-4 w-4 bg-teal-600"></div>
                <div className="ml-3 h-4 w-4 bg-yellow-600"></div>
              </div>
            </div>
          </div>
        
      <div className="abc md:mt-5 mt-5 md:pb-2 pl-2 pr-2">
         <div className="flex flex-row justify-between md:m-6">
          <div className="mt-5 md:m-0">
            <h1 className="md:text-xl text-lg font-bold bb">Rs 2,80,000</h1>
            <h1 className=" text-xs md:text-lg md:pl-12 md:ml-3 pl-5 text-sm">
              Delivered by 30 Days
            </h1>
          </div>
          <div className="md:mt-0">
            <button className="md:px-12 md:py-4  px-5 py-2 bg-teal-600 text-white  md:text-lg text-xs rounded font-semibold  mt-6 md:m-0 md:mb-1">
              BOOK A CONSULTATION
            </button>
          </div>
        </div> 
        <div className="text-xl md:mt-6 md:pt-5 font-semibold mt-12 mb-8 ml-2 md:text-3xl text-left ">
          Kitchen
        </div>
        <hr className="bg-black md:mt-1" />
        <div className="md:grid md:grid-cols-2 grid grid-flex-row grid-cols-1 md:mt-6 mt-5 md:pb-10 md:mb-8">
          <img src="a2.png" className="md:ml-12 md:pl-10 mr-1 " />
          <div className="md:mt-12 mt-5">
            <h1 className="md:text-3xl font-semibold text-xl">
              A Body Brown and White Modular Kitchen Design
            </h1>
            <h1 className="text-lg font-semibold md:mt-3"></h1>
            <div className="text-lg mt-5">
              <p className="md:mt-4 md:text-lg">
                This royal blue and white modular kitchen with floral tiles is
                for those who wants to make a statement.This kitchen design with
                clever storage options makes working easier and much cleaner
              </p>
            </div>
          </div>
        </div>
        <div className="text-xl md:mt-6 md:pt-5 font-semibold mt-12 mb-8 ml-2 md:text-3xl text-left ">
          Some options you may like
        </div>
        <div>
         
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App2;