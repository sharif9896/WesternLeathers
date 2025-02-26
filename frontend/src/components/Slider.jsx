import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const Slider = ({ children: slides, autodslide = false, autoslideInterval = 3000 }) => {
    const [curr,setcurr] = useState(0);

    const prev = () =>{
        setcurr((curr)=> curr === 0 ? slides.length - 1 : curr - 1);
    }
    const next = () =>{
        setcurr((curr)=> curr === slides.length - 1 ? 0 : curr + 1);
    }

    useEffect(() => {
        if(!autodslide) return;
        const slidesetInterval = setInterval(next, autoslideInterval);
        return () => clearInterval(slidesetInterval);
    }, []);
  return (
    <>
      <div className="overflow-hidden relative w-[100%]">
        <div className="flex transition:transform ease-out duration-500 w-[100%]" style={{transform:`translateX(-${curr * 100}%)`}}>{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full  shadow bg-gray-100 opacity-30 hover:opacity-100 cursor-pointer text-gray-800 hover:bg-white ">
            <FaChevronLeft className="text-gray-800" size={40}/>
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-gray-100 opacity-30 hover:opacity-100 cursor-pointer text-gray-800 hover:bg-white">
            <FaChevronRight size={40}/>
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center">
                {slides.map((_,index) => (
                    <div key={index} onClick={()=>setcurr(index)} className={`cursor-pointer w-2 h-2 mx-2 rounded-full bg-white ${curr === index ? "p-[6px]" : "bg-opacity-50"}`}></div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
