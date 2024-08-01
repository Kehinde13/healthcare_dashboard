import Image from "next/image";
import React from "react";
import logo from "@/public/assets/TestLogo (1).svg";
import home from '@/public/assets/home_FILL0_wght300_GRAD0_opsz24.svg'
import users from '@/public/assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import calender from '@/public/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import message from '@/public/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import card from '@/public/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import doc from '@/public/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import settings from '@/public/assets/settings_FILL0_wght300_GRAD0_opsz24.svg'
import options from '@/public/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg'

function Navbar() {
  return (
    <div className="px-5 py-2 m-3 rounded-full bg-white flex justify-between text-sm">
      <Image src={logo} alt="logo" className="w-[40%] md:w-[10%]"/>

      <ul className="md:flex gap-3 hidden ">
        <li className="flex gap-2 cursor-pointer py-1 px-3 hover:bg-[#01F0D0] rounded-full">
          <Image src={home} alt="home icon" /> 
          <p className="self-center">Overview</p>
        </li>
        <li className="flex gap-2 cursor-pointer py-1 px-3 hover:bg-[#01F0D0] rounded-full">
        <Image src={users} alt="users icon" /> 
        <p className="self-center">Patients</p>
        </li>
        <li className="flex gap-2 cursor-pointer py-1 px-3 hover:bg-[#01F0D0] rounded-full">
        <Image src={calender} alt="calender" /> 
        <p className="self-center">Schedule</p>
        </li>
        <li className="flex gap-2 cursor-pointer py-1 px-3 hover:bg-[#01F0D0] rounded-full">
        <Image src={message} alt="message icon" /> 
        <p className="self-center">Message</p>
        </li>
        <li className="flex gap-2 cursor-pointer py-1 px-3 hover:bg-[#01F0D0] rounded-full">
        <Image src={card} alt="card icon" /> 
        <p className="self-center">Transactions</p>
        </li>
      </ul>

      <div className="md:flex gap-3 hidden">
      <Image className="self-center" src={doc} alt="doctor's image" />
        <div className="mt-1 border-r-2 border-gray-200 pr-2">
           <p className="font-bold">Dr. jose simmons</p>
           <p>General Practitional</p>
        </div>
        <div className="flex gap-2">
        <Image src={settings} alt="settings icon" />
        <Image src={options} alt="options icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
