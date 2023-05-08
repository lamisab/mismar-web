import { useState } from "react";
import { Link } from "react-router-dom";
import { BsBoundingBox, BsGear } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import {
  HiOutlineClipboardList,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

function Sidebar() {
  const [menus, setMenus] = useState([
    {
      routeName: "الرئيسية",
      route: "/",
      icon: <AiOutlinePieChart size={22} />,
    },
    {
      routeName: "الطلبات",
      icon: <HiOutlineClipboardList size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "كل الطلبات ", route: "/all-orders" },
        { routeName: "طلبات التواصل", route: "/communication-orders" },
        { routeName: "طلبات الإسترجاع", route: "/return-orders" },
        { routeName: "إشعارات الطلبات", route: "/notifications-orders" },
        { routeName: "طلبات قطع الغيار", route: "/spare-part-orders" },
      ],
    },
    {
      routeName: "المستخدمين",
      icon: <HiOutlineUserGroup size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },

    {
      routeName: "الإستبيان",
      icon: <HiOutlineClipboardCheck size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },
    {
      routeName: "الخدمات",
      icon: <BsBoundingBox size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },

    {
      routeName: "الأوقات",
      icon: <BiTimeFive size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },
    {
      routeName: "العروض",
      icon: <MdOutlineLocalOffer size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },
    {
      routeName: "النظام",
      icon: <BsGear size={22} />,
      subMenu: true,
      isOpen: false,
      subMenuItems: [
        { routeName: "قسم ١", route: "/all-orders" },
        { routeName: "قسم ٢", route: "/communication-orders" },
        { routeName: "قسم ٣ ", route: "/return-orders" },
      ],
    },
  ]);

  function toggleOpen(index: any) {
    const newMenus = [...menus];
    newMenus.forEach((item) => {
      item.isOpen = false;
    });
    newMenus[index].isOpen = !newMenus[index].isOpen;
    setMenus(newMenus);
  }

  return (
    <div className="flex">
      <div className="fixed top-0 right-0 z-40 w-auto h-full overflow-auto">
        <div className="h-full w-[400px] bg-sideBarColor ">
          <div className="px-[112px] pt-[60px]">
            <img
              className="  h-[163px] w-[163px]   rounded-full bg-white "
              src={"assets/images/logo-mismar.png"}
              alt=" LOGO"
            />
          </div>
          <div className="pt-[93px]  bg-sideBarColor ">
            <ul>
              {menus.map((menu, index) => (
                <>
                  <li
                    key={index}
                    className="text-white text-sm flex items-center gap-x-4  "
                  >
                    <span className="pr-[13px] pt-6">{menu.icon}</span>
                    <div className=" hover:text-mainColor  hover:underline underline-offset-8 font-headlins font-[500px] text-[24px] leading-[36px] pt-[32px] mb-2   ">
                      <Link
                        to={menu.route!}
                        onClick={() => {
                          toggleOpen(index);
                        }}
                      >
                        {" "}
                        {menu.routeName}
                      </Link>
                    </div>
                  </li>
                  {menu.subMenu && menu.isOpen && (
                    <ul className="bg-[#D9D9D91A]  pt-2 pb-2 ">
                      {menu.subMenuItems.map((submenuItem, index) => (
                        <li
                          key={index}
                          className="text-[#D9D9D99A]  items-center m-3 px-[45px] hover:text-mainColor  hover:underline underline-offset-[9px]   "
                        >
                          <Link
                            to={submenuItem.route!}
                            className="  active:text-mainColor font-headlins font-[300px] text-lg  "
                          >
                            {" "}
                            {submenuItem.routeName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
