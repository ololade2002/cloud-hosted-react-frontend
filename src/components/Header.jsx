import React from "react";
import { Mail, BellDot, Search } from "lucide-react";

const Header = () => {
  return (
    <main className="grid grid-cols-12 gap-4 lg:gap-8 font-raleway mt-2 pb-6 lg:pb-6  items-center justify-between">
      <div className="col-span-10 lg:col-span-9 bg-[#F5F7FB] rounded-full border border-gray-300 hover:border-bgPurple hover:shadow-md transition-shadow duration-300 ease-in-out">
        <div className="flex flex-row items-center  gap-1.5  px-4 py-3 ">
          <Search className="w-4 h-4" />
          <input
            className="text-[16px] w-full outline-none"
            placeholder="Search your course..."
          />
        </div>
      </div>

      <div className=" col-span-2 lg:col-span-3 ">
        <div className="flex flex-row items-center justify-end lg:justify-between ">
          <div className="bg-[#F5F7FB]  hidden lg:flex border rounded-full p-3 hover:border-bgPurple hover:shadow-md transition-shadow duration-300 ease-in-out">
            <Mail className="w-5 h-5" />
          </div>
          <div className="bg-[#F5F7FB] hidden lg:flex border rounded-full p-3 hover:border-bgPurple hover:shadow-md transition-shadow duration-300 ease-in-out">
            <BellDot className="w-5 h-5" />
          </div>
          <div className="separator hidden lg:flex h-9 w-px bg-gray-400" />
          <div className="flex flex-row items-center justify-center gap-2 ">
            <div className="bg-[#fbeeee] border  rounded-full p-1">
              <img className="w-9 h-9" src="https://api.dicebear.com/9.x/adventurer/svg?seed=George" alt="avatar" />
            </div>
            <div className="hidden lg:flex">
              <h4 className="font-medium text-[17px] hover:text-bgPurple">Eleja Ololade</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
