import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Category } from "./pages/category/Category";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
