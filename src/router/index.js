import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppBarComponent from "../components/nav/appBar";
import Home from "../components/home";
import LoginComponent from "../components/auth/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <AppBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
