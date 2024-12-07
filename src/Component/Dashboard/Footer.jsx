import React from "react";
import Facebook from '../Asset/Facebook.png'
import Twitter from '../Asset/Twitter.png'
import LinkedIn from '../Asset/Linkedin.png'
import Instagram from '../Asset/Instagram.png'
import logo from '../Asset/Group 749.png'
import image1 from '../Asset/Rectangle 37.png'
import image2 from '../Asset/Rectangle 43.png'
import { CgPhone } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="">
      <div className="flex px-[80px] bg-red-100 pb-[304px] pt-10">
        <div className="w-1/2">
          <div className="flex flex-col items-center pt-16">
            <h3 className="text-[#992B1C] font-bold text-2xl">About Us</h3>
            <p className="text-[#992B1C] font-normal text-md">What we do</p>
            <div className=" flex w-4/6 pt-52 pl-[100px] items-center">
              <p className="text-[#992B1C] text-xl">
                The Vendor Services Exchange Platform is a digital marketplace designed to connect professionals from various industries—such as catering, event planning, drink sales, rentals, photography, and more—allowing them to offer, exchange, and request services.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <div>
            <img src={image1} alt="Logo"/>
            </div>
            <div className="absolute top-72 -left-36">
            <img src={image2} alt="Logo"/>
            </div>
          </div>
        </div>
      </div>
     <div className=" px-10 bg-red-300">
     <div className="pt-5 flex justify-between">
        <div className="flex gap-8">
          <div>
            <h5 className="text-black text-[23px] font-semi-bold pb-3">Teams</h5>

            <p className="text-black text-[16px]">Vendors</p>
            <p className="text-black text-[16px]">Clients</p>
            <p className="text-black text-[16px]">Subscription</p>
          </div>
          <div>
            <h5 className="text-black text-[23px] font-semi-bold  pb-3">Company</h5>

            <p className="text-black text-[16px]">Partners</p>
            <p className="text-black text-[16px]">Contact Us </p>
            <p className="text-black text-[16px]">About Us </p>
            <p className="text-black text-[16px]">FAQs</p>
          </div>
        </div>
        <div>
          <h3 className="text-black text-[20px] pb-3">Reach out to us</h3>
          <h6 className="text-black text-[16px]">
            Get your questions answered <br />
            about partnerships on Teams
          </h6>
          <div className="flex py-4 gap-3 items-center">
          <CgPhone/>
            <p className="text-black text-[18px]">+234 80 555 7868 99</p>
          </div>
          <div className="flex gap-3 items-center">
          <FiMessageSquare/>
            <p className="text-black text-[18px]">info@teams.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-3 mr-10">
        <div>
        <img src={logo} alt="Logo"/>
        </div>
        <div className="flex gap-4">
        <img src={LinkedIn} className="w-7 h-7" alt="Logo"/>
        <img src={Twitter} className="w-7 h-7" alt="Logo"/>

        <img src={Instagram} className="w-7 h-7" alt="Logo"/>

        <img src={Facebook} className="w-7 h-7" alt="Logo"/>
        </div>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex gap-5">
          <p className="text-black font-semi-bold text-[16px]">Privacy</p>
          <p className="text-black font-semi-bold text-[16px]">Teams of Service</p>
          <p className="text-black font-semi-bold text-[16px]">Cookie Policy</p>
        </div>
        <div className="flex">
          <p className="text-black text-[16px]">Copyright &copy; 2024</p>
        </div>
      </div>
     </div>
    </div>
  );
}