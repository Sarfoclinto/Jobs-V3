import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [location, setLocation] = useState(window.location.pathname);
  return (
    <main className=" flex w-ful h-full active-tab rounded-lg gap-1">
      <div className=" w-1/6 ">
        <Sidebar />
      </div>
      <div id="content" className="w-5/6 rounded-r-lg pl-1 flex flex-col gap-1">
        <div id="header" className="h-fit pb-2 bg-outlet rounded-t-lg">
          {window.location.pathname === "/main/dashboard" && <Header />}
        </div>

        <div id="outlet" className="bg-outlet h-full overflow-auto p-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
