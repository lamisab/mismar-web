import ReturnOrdersContainer from "src/containers/admin/returnOrders-containar";
// طلبات الاسترجاع
const ReturnOrdersPage = () => {
  return (
    <div className="bg-[#F8F8F8] pb-[350px] ">
      <div className=" mr-[400px] pt-10 pr-[32px] ">
        <div className="w-px-1264 h-[747px] px-5 pt-5 my-2 ml-[32px] bg-white rounded-[8px] ">
          <ReturnOrdersContainer />
        </div>
      </div>
    </div>
  );
};

export default ReturnOrdersPage;
