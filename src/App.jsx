import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Todo from "./Pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
