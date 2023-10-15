import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import DashboardLayout from "../../components/DashboardLayout";

const dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div>
          <Dashboard />
        </div>{" "}
      </DashboardLayout>
    </>
  );
};

export default dashboard;
