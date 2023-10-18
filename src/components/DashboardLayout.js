import React from "react";
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";


const DashboardLayout = ( { children } ) => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <div>
            <Header />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
