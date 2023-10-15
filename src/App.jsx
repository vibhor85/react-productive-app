import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Todo from "./Pages/Todo";
import Schedule from "./Pages/Schedule";
import DashboardLayout from "./Pages/DashboardLayout";
import Apps from "./components/Dashboard/Apps";
import User from "./components/Dashboard/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Todo />} />
          <Route path="calender" element={<Schedule />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Apps />} />
            <Route path="user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
