import { useState } from "react";

import { MdOutlineNotificationsNone } from "react-icons/md";

function NotificationButton() {
  const [open, setOpen] = useState<boolean>(false);

  const notifications = [
    { notificationTitle: "notification 1" },
    { notificationTitle: "notification 2" },
    { notificationTitle: "notification 3" },
    { notificationTitle: "notification 4" },
  ];

  return (
    <div className=" pt-[31px] float-left pl-[32px] pb-[16px] ">
      <button
        className=" sticky text-white bg-[#333333] focus:ring-1 rounded-[8px]  
          w-[194px] h-[56px] left-[961px] top-[31px]
          items-center  inline-flex font-headlins font-light  text-[18px]  "
        onClick={(e) => setOpen(!open)}
      >
        <div className="mr-[24px] ml-[22px] ">
          {" "}
          <MdOutlineNotificationsNone size={18} />{" "}
        </div>
        مركز الإشعارات
      </button>
      {open && (
        <div className="  cursor-pointer  mt-[183px]  ">
          <ul className="  bg-slate-200     cursor-pointer rounded-[8px]  ">
            {notifications.map((notification, index) => (
              <>
                <li className="pr-3 hover:bg-mainColor p-2 rounded-[8px] font-headlins font-light text-[18px] ">
                  {" "}
                  {notification.notificationTitle}{" "}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NotificationButton;
