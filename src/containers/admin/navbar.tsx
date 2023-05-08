import NotificationButton from "../../components/admin/notification-button";
import LogoutButton from "../../components/admin/logout-button";
import Sidebar from "../../components/admin/sidebar";

function Navbar() {
  return (
    <>
      <Sidebar />
      <div className="flex justify-between items-center w-auto h-[104px] rounded bg-navBarColor shadow-md mr-[400px] ">
        <LogoutButton />
        <NotificationButton />
      </div>
    </>
  );
}

export default Navbar;
