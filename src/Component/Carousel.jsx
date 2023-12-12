import React, { useState } from "react";
import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";

const sliderData = [
  {
    url: "https://images.pexels.com/photos/4846518/pexels-photo-4846518.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Carousel = () => {
  let [slide, setSlide] = useState(0);
  const length = sliderData.length;

  // const prevSlide = () => {
  //   // setSlide(slide <= length-3  && slide >= 0 ? slide - 1 : slide - 0);
  //   setSlide(slide--)
  //   if(slide === 0){
  //     setSlide(4)
  //   }
  //   console.log(slide)
  // };
  // const nextSlide = () => { 
    
  //   setSlide( slide >= 0 && slide <= length-2 ? slide + 1 : slide + 0) ;
  //   console.log(slide)
  // if(length === slide +1){
  //     setSlide(0)
  //   }
  // };
    const prevSlide = () => {
    setSlide(slide === length -1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide ===  0  ? length -1 :  slide - 1);
  };

  
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center ">
      <BiChevronLeftSquare
        onClick={prevSlide}
        className="absolute top-[50%] text-2xl text-black cursor-pointer left-8"
      />
      <BiChevronRightSquare
        onClick={nextSlide}
        className="absolute top-[50%] text-2xl text-black cursor-pointer right-8"
      />

      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100 " : "opacity-100"  }>
          {index === slide && (
            <img className="h-screen w-full rounded-md " src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
