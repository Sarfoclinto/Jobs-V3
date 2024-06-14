import { useContext } from "react";
import Sidelinks from "./Sidelinks";
import { UserContext } from "../context/Users";
function Sidebar() {
  const { currentUser } = useContext(UserContext);
  return (
    <aside className="bg-dashboard w-full h-full min-w-fit flex flex-col  rounded-l-xl p-3">
      <div id="title" className="flex items-center gap-1">
        <img
          src="/src/assets/logo2.jpeg"
          alt=""
          className="w-[35px] logo rounded-xl cursor-pointer"
        />
        <h3 className="font-bold text-purple-700 text-2xl">
          W<span className="text-purple-300">el</span>C
          <span className="text-purple-300">ome</span>
        </h3>
      </div>

      <div
        id="profile"
        className="w-full flex gap-1 flex-col items-center my-2"
      >
        <img
          src={
            currentUser.img ? currentUser.img : "/src/assets/profile-pic.jpeg"
          }
          alt=""
          className="w-2/5 h-20 logo rounded-full "
        />
        <h3 className="font-bold text-xl text-purple-300 uppercase">
          {currentUser?.username}
        </h3>
        <h3 className="text-purple-300 font-medium ">{currentUser?.email}</h3>
      </div>

      <nav id="navbar" className="flex flex-col justify-between gap-y-32">
        <ul className="flex flex-col gap-y-1">
          <Sidelinks name="Dashboard" img="dashboard" to="main/dashboard" />
          <Sidelinks name="Categories" img="cat1-l" to="main/category" />
          <Sidelinks name="Deals" img="deals" to="main/deals" />
          <Sidelinks name="Processing" img="processing" to="main/processing" />
        </ul>
        <ul>
          <Sidelinks name="Business News" img="news" to="main/business" />
          <Sidelinks name="Settings" img="settings" to="main/settings" />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
