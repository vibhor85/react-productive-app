import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Todo from "./Pages/Todo";
import Calender from "./Pages/Calender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Todo />} />
          <Route path="calender" element={<Calender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
