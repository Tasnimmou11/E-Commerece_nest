// import React from 'react'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function NextArrow({  customStyle, onClick }) {
 
    return (
    <div
        className={`w-6 h-6 md:w-10 md:h-10 z-50 hover:bg-brand hover:text-white ${customStyle} rounded-full bg-[#F2F3F4]  text-primary flex justify-center items-center cursor-pointer`}
        onClick={onClick}
    ><FaArrowRight /></div>
    );
}

function PrevArrow(props) {
    const { customStyle, onClick } = props;
    return (
    <div
        className={`w-6 h-6 md:w-10 md:h-10z-50 hover:bg-brand hover:text-white ${customStyle} rounded-full bg-[#F2F3F4]  text-primary flex justify-center items-center cursor-pointer`}
    
    onClick={onClick}
        ><FaArrowLeft />
            </div>
    );
}
export {NextArrow, PrevArrow}


// const SliderArrows = () => {
//   return (
//     <div>SliderArrows</div>
//   )
// }

// export default SliderArrows