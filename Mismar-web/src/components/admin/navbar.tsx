import NotificationButton from "./notification-button";
import Sidebar from "./sidebar";

function Navbar() {
  return (
    <>
      <Sidebar />
      <div className="flex justify-between items-center w-auto h-[104px] rounded bg-navBarColor shadow-md mr-[400px] mb-10 ">
        <NotificationButton />
      </div>
    </>
  );
}

export default Navbar;
