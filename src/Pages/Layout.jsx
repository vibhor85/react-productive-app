import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
