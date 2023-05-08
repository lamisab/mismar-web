import { useState } from "react";
import SuccessAlert from "src/components/admin/successAlert";

const ReturnOrdersContainer = () => {
  const [details, setDetails] = useState([
    {
      orderNum: "12345",
      orderDate: "2023/04/21",
      state: "ناصر فهد",
      returnReason: "عطل في البطاريه",
      date: "2023/02/02| 01:00م-08:00 م",
      isHidden: "",
    },
    {
      orderNum: "12346",
      orderDate: "2023/04/21",
      state: "ناصر فهد",
      returnReason: "عطل في البطاريه",
      date: "2023/02/02| 01:00م-08:00 م",
      isHidden: "",
    },
  ]);

  const [isShow, setIsShow] = useState(false);

  function toggleOpen(index: any) {
    const newDetails = [...details];
    newDetails[index].isHidden = "hidden";
    setDetails(newDetails);
  }

  function showAlert(isShow: boolean) {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }

  return (
    <>
      <h6 className="  font-headlins text-[21px] font-[500px] ">
        {" "}
        عدد الطلبات ({details.length}){" "}
      </h6>
      <div className=" flex justify-center  ">
        {isShow && (
          <div className="fixed">
            <SuccessAlert />
          </div>
        )}
        {details.map((detail, index) => (
          <div
            key={index}
            className={`bg-[#F8F8F8] h-[275px] w-[505px] mt-[143px] rounded-[8px] ml-8  pr-4 ${detail.isHidden} `}
          >
            <h2 className=" font-headlins text-mainColor text-[24px] font-[500px] pt-4 ">
              {" "}
              رقم الطلب :
              <span className="text-blue-400 text-[24px] font-[500px] pr-[8px] ">
                {" "}
                {detail.orderNum}
              </span>
            </h2>
            <span className="text-[#8A8A8A] font-headlins text-[14px] font-[500px] ">
              {" "}
              تاريخ الطلب :<span className="pr-[4px]">{detail.orderDate}</span>
            </span>
            <hr className="mt-[32px] w-[468px] bg-[#B9B9B9] h-[1px]" />
            <div className="pr-[16px] pt-[16px]">
              <span className="text-mainColor font-headlins text-[16px] font-[500px] ">
                {" "}
                الحالة الداخلية :
                <span className="pr-[8px]"> {detail.state}</span>
              </span>
              <div className=" flex space-x-7 justify-between pt-9 ">
                <div className=" h-[21px] w-[214px]  rounded-sm border-solid border-[1.5px] border-black font-[12px] ">
                  <span className=" font-headlins text-[12px] font-[500px] inline-block align-top pr-1  ">
                    {" "}
                    الاستلام :<span className="pr-1 ">{detail.date}</span>
                  </span>
                </div>
                <div className=" h-[21px] w-[214px]  rounded-sm border-solid border-[1.5px] border-black font-[12px] ">
                  <span className=" font-headlins text-[12px] font-[500px] inline-block align-top pr-1 ">
                    {" "}
                    الاستلام :<span className="pr-1 ">{detail.date}</span>
                  </span>
                </div>
              </div>

              <div className=" pt-[32px] flex space-x-4 justify-between">
                <div>
                  <span className="text-mainColor font-headlins text-[16px] font-[500px] ">
                    {" "}
                    سبب الإرجاع :
                    <span className="pr-[8px]">{detail.returnReason}</span>
                  </span>
                </div>
                <div className=" relative">
                  <span className=" inline-block text-mainColor font-headlins text-[16px] font-[500px] ">
                    {" "}
                    تم التواصل ؟
                  </span>
                  <span className="pr-[8px]">
                    <label className="   mr-[11px] cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div
                        onClick={() => {
                          toggleOpen(index);
                          showAlert(true);
                        }}
                        className=" inline-block w-[35px] h-[15px] bg-gray-300 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:left-[0px] after:bg-white after:border-gray-300 after: after:rounded-full after:h-[15.5px] after:w-[17.5px] after:transition-all peer-checked:bg-mainColor"
                      >
                        {" "}
                      </div>
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-end pt-[235px] ">
        <div className="w-8 h-8 p-1.5 rounded-full pl-5 content-center cursor-pointer mx-1 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="svgArrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="w-8 h-8 p-1 rounded-full pl-5 content-center cursor-pointer mx-1 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="svgArrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div
          className="w-8 h-8 px-1 text-center rounded-full content-center cursor-pointer mx-1 border-2 border-gray-300"
          style={{ backgroundColor: "red", color: "#fff" }}
        >
          1
        </div>
        <div className="w-8 h-8 p-1.5 rounded-full pl-5 content-center cursor-pointer mx-1 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="svgArrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div className="w-8 h-8 p-1.5 rounded-full pl-5 content-center cursor-pointer mx-1 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="svgArrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ReturnOrdersContainer;
