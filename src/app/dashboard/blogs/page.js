import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import NewBlog from "../../blog/NewBlog/page";

const blogs = () => {
  return (
    <>
      <DashboardLayout>
        <div>
          <NewBlog />
        </div>
      </DashboardLayout>
    </>
  );
};

export default blogs;
