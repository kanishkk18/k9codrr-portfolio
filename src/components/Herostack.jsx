
import React from 'react';


const OverlayImages = () => {
  return (
    <div className="hidden md:flex lg:flex items-end h-screen w-full bg-transparent overflow-hidden ">
     
      <div className="flex justify-center w-[50%] items-end h-full">
        <div className="relative w-[50%] h-[85%]">
          <img
            src= "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703732/wwkzqnshyonmn8g3rfpx.jpg"
            alt="Left img 1"
           
            className="rounded-tl-lg h-full w-full object-cover shadow-lg border-l-[4px] border-t-[3px] border-[#202020]"
          />
        </div>
        <div className="relative w-[50%] h-[90%]">
          <img
           src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703730/objwetuxsnzpsxgan7y8.jpg"
            alt="Left img 2"
            
            className="rounded-tl-lg h-full w-full object-cover shadow-lg border-l-[5px] border-t-[3px] border-[#202020]"
          />
        </div>
      </div>

      {/* Center img */}
      <div id='box-shadow' className=" relative w-[40%] h-[95%]">
        <img
         src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726745984/lo6twu08ajjwcebvcdpi.png" 
       
          className="rounded-t-md h-full w-full object-cover"
          id='herostack-center'
          
        />
      </div> 

      {/* Right imgs */}
      <div className="flex items-end w-[50%] justify-center h-full">
        <div className="relative w-[50%] h-[90%]">
          <img
            src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703731/yoc9zguol8zef8lyamg1.jpg"
            alt="Right img 1"
           
           
            className="rounded-tr-lg h-full w-full object-cover shadow-lg border-r-[5px] border-t-[3px] border-[#202020]"
          />
        </div>
        <div className="relative w-[50%] h-[85%]">
          <img
           src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703732/bmkpmqe00rqqzuqzt8a3.png"
            alt="Right img 2"
            
           
            className="rounded-tr-lg h-full w-full object-cover shadow-lg border-r-[4px] border-t-[3px] border-[#202020]"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlayImages;
