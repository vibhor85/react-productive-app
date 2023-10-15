import LeftSidebar from "../components/Dashboard/LeftSidebar";
import { Outlet } from "react-router-dom";

const style = {
  display: "flex",
};

const DashboardLayout = () => {
  return (
    <div style={style}>
      <LeftSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
