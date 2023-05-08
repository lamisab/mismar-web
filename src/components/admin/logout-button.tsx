import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function LogoutButton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className=" pt-[31px] pr-[54px] pb-[16px]">
      <button
        className="sticky text-white bg-[#252525] focus:ring-1 rounded-[8px] 
              w-[313px] h-[56px] left-[983px] top-[31px]  
              items-center   inline-flex font-headlins font-medium text-[21px] "
        onClick={(e) => setOpen(!open)}
      >
        <div className="mr-[70px] ml-[136px]">
          <IoIosArrowDown
            className={`${open && "  -rotate-180 duration-700 translate-5  "}`}
            size={18}
          />
        </div>
        Admin
      </button>
      {open && (
        <div className=" pt-[30px] flex flex-col cursor-pointer  ">
          <ul className="  pt-5   cursor-pointer rounded-[8px] ">
            <li className="pr-3 bg-mainColor text-white  flex items-center  p-2 rounded-[8px] font-headlins font-light text-[18px] ">
              {" "}
              تسجيل الخروج
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LogoutButton;
