import { useState } from "react";

const AllOrdersContainer = () => {
  const [orders] = useState([
    {
      orderNum: 33322,
      dateOrder: "12-10-2023",
      serve: "نص نص نص نص",
      subService: "نص نص نص نص",
      brand: "نص نص نص نص",
      model: " نص نص نص نص",
      dateNTimePickUp: "02-01-2023 | 9:00 ص11:00 ص",
      dateTimeDelver: "لايوجد بيانات",
    },
    {
      orderNum: 33322,
      dateOrder: "12-10-2023",
      serve: "نص نص نص نص",
      subService: "نص نص نص نص",
      brand: "نص نص نص نص",
      model: " نص نص نص نص",
      dateNTimePickUp: "02-01-2023 | 9:00 ص11:00 ص",
      dateTimeDelver: "لايوجد بيانات",
    },
    {
      orderNum: 33322,
      dateOrder: "12-10-2023",
      serve: "نص نص نص نص",
      subService: "نص نص نص نص",
      brand: "نص نص نص نص",
      model: " نص نص نص نص",
      dateNTimePickUp: "02-01-2023 | 9:00 ص11:00 ص",
      dateTimeDelver: "لايوجد بيانات",
    },
    {
      orderNum: 33322,
      dateOrder: "12-10-2023",
      serve: "نص نص نص نص",
      subService: "نص نص نص نص",
      brand: "نص نص نص نص",
      model: " نص نص نص نص",
      dateNTimePickUp: "02-01-2023 | 9:00 ص11:00 ص",
      dateTimeDelver: "لايوجد بيانات",
    },
  ]);

  return (
    <div className="pr-[50px] mr-[370px] ml-5">
      <div className="w-full h-[824px] mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="px-4 pb-3 font-bold font-headlins">كل الطلبات (٣٢٩)</h5>
        <div className="flex overflow-x-auto pb-700 snap-proximity scroll-smooth">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorGreen grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorGreen font-semibold">
                    طلب جديد
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <div className="px-3 py-3">
                  {orders.map((order, index) => (
                    <>
                      <div className="pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorRed grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorWhite font-semibold">
                    بانتظار الموافقة على عرض السعر
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <h5 className=" px-3 py-3 overflow-auto ">
                  {orders.map((order, index) => (
                    <>
                      <div className=" pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </h5>
              </div>
            </div>

            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorBlue grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorBlue font-semibold">
                    جاري العمل
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <div className=" px-3 py-3 ">
                  {orders.map((order, index) => (
                    <>
                      <div className=" pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorRed grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorWhite font-semibold">
                    بانتظار الدفع
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <div className=" px-3 py-3">
                  {orders.map((order, index) => (
                    <>
                      <div className=" pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorRed grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorWhite font-semibold">
                    بانتظار جدولة الاستلام
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <div className="px-3 py-3">
                  {orders.map((order, index) => (
                    <>
                      <div className=" pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="inline-block px-4">
              <div className="w-[658px] h-[700px] overflow-y-auto rounded-md shadow-md bg-backgroundColor hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-[57px] w-[658px] bg-containerColorGreen grid grid-cols-2 gap-2 p-4">
                  <h1 className="col-start-1 col-end-2 font-headlins text-fontColorGreen font-semibold">
                    تم التسليم
                  </h1>
                  <h1 className="col-end-8 col-span-1 font-headlins">(٨٨٨)</h1>
                </div>
                <div className="px-3 py-3">
                  {orders.map((order, index) => (
                    <>
                      <div className=" pb-5  ">
                        {/*for card*/}
                        <div
                          key={index}
                          className="bg-navBarColor h-[275px] w-[635px] rounded-xl pr-3 hover:shadow-lg transition-all duration-500 ease-in"
                        >
                          <div className="flex justify-between gap-6  pt-4 pr-1 w-[550px] ">
                            <p className="font-headlins text-mainColor text-[24px] font-[500] pl-10">
                              {" "}
                              رقم الطلب :
                              <span className=" text-blue-400 text-[24px]  pr-[4px] ">
                                {" "}
                                {order.orderNum}
                              </span>
                            </p>
                            <p className="text-[#8A8A8A] font-headlins text-[17px] font-normal pl-10 ">
                              {" "}
                              تاريخ الطلب :
                              <span className="pr-[4px]">
                                {order.dateOrder}
                              </span>
                            </p>
                          </div>

                          <div className="grid gap-6 grid-cols-2 pb-3.5 pt-2">
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.serve}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                الخدمة الفرعية :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.subService}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                البراند :
                                <span className="pr-[8px] text-black">
                                  {" "}
                                  {order.brand}
                                </span>
                              </span>
                            </p>
                            <p className="pr-[16px] pt-[16px]">
                              <span className="text-mainColor font-headlins text-[16px] font-normal ">
                                {" "}
                                المــوديل :
                                <span className="pr-[8px] text-black">
                                  {order.model}
                                </span>
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between gap-3  pt-8 pr-1 w-[540px] ">
                            {/* for pickup and delvery */}
                            <div className=" h-[38px] w-[320px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-2  ">
                                {" "}
                                الإستلام :
                                <span className="pr-[4px]">
                                  {order.dateNTimePickUp}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                            <div className=" h-[38px] w-[210px] rounded border-solid border-[1px] border-black">
                              {/* for border */}
                              <span className=" font-headlins text-[16px] font-medium  pr-4  ">
                                {" "}
                                التسليم :
                                <span className="pr-[4px]">
                                  {" "}
                                  {order.dateTimeDelver}
                                </span>
                                <span className="pr-[3px]"></span>
                                <span className="pr-[3px]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrdersContainer;
