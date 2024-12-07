import React from "react";
import logo from '../Asset/Group 749.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-20">
        <img src={logo} alt="Logo" className=" " />
          <div className="flex items-center gap-10">
            <p className="text-black text-[20px]">Home</p>
            <p className="text-black text-[20px]">About us</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="border px-2 py-2 hover:bg-red-800 hover:p-3 rounded-xl border-[#13121280]">
          <Link to="/login" className="text-black  p-2">
              Login
            </Link>
          </div>
          <div className="flex px-[20px] py-[4px] rounded-xl bg-[#992b1c] ">
          <Link to="/signup-page" className="text-black p-2">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}