import React from "react";
import Frame1 from '../Asset/Frame1.png'
import Frame2 from '../Asset/Frame2.png'
import Frame3 from "../Asset/Frame3.png"
import Frame4 from '../Asset/Frame4.png'
import Frame5 from '../Asset/Frame5.png'
import Frame6 from '../Asset/Frame6.png'
import SeeMoreButton from "./SeeMoreButton";
export default function Product() {
  return (
    <div className="py-[41px]">
      <div className="flex items-center flex-col">
        <h3 className="text-black text-[40px] font-bold">
          No <span className="text-[#992b1c]">Team</span> is Left Out!
        </h3>
        <h4 className="text-[35px] text-black">Get the best of the best vendors</h4>
      </div>
      <div className="w-full pt-[60px]">
        <div className="flex justify-center gap-10">
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame1} alt="Logo"/>
            <div className="py-3">
              <p className="text-[#800000] text-[20px]">Event Planner</p>
            </div>
            <SeeMoreButton/>
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame2} alt="Logo"/>
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Event Photographer</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame3} alt="Logo"/>
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Logistics</p>
            </div>
            <SeeMoreButton />
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10">
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame4} alt="Logo"/>
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Makeup Artist</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame5} alt="Logo"/>
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Automobile Mechanic</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
          <img src={Frame6} alt="Logo"/>
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Disk Jockey (DJ)</p>
            </div>
            <SeeMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}