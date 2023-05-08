import { BiCheckCircle } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const SuccessAlert = () => {
  return (
    <div
      className="inline-flex w-[537px] h-[50px] items-center text-center rounded-[4px] bg-[#A4D8C2] pr-[8px] text-[14px] font-headlins text-[#008C51] font-[600]  "
      role="alert"
    >
      <span>
        <IoCloseOutline className="h-5 w-5" />
      </span>
      <span className="mr-[200px] inline-flex">
        تم تحديث الطلب بنجاح
        <BiCheckCircle className="h-5 w-5 mr-[160px] " />
      </span>
    </div>
  );
};

export default SuccessAlert;
