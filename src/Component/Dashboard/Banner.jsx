import React from "react";
import Mask from '../Asset/Mask group.png';
// import { CgSearch } from "react-icons/cg";

function Banner() {
  return (
    <div className="bg-[#eddfdf] h-screen px-[50px]">
      <div className="flex items-center gap-10 pt-[100px]">
        <div className="w-1/2">
          <div className="">
            <p className="text-[47px] text-black font-semi-bold leading-tight">
              Connecting Vendors for Seamless Collaboration
            </p>
          </div>
          <div className=" py-[30px]">
            <p className="text-black text-[20px]">
              At Teams, we bring together the best of the
              best in the industry <br />
              to give your event the most quality hands ever.
            </p>
          </div>
          <div className="" >
          <button className="px-[20px] py-[10px] gap-2 w-20 rounded-xl bg-[#992b1c] justify-center mx-auto text-white text-[20px]"> Search</button>
          </div>
        </div>
        <div className="w-1/2">
        <img src={Mask} alt="Logo" className="width={526} height={508} mb-4" />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Banner;