import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppBarComponent from "../components/nav/appBar";
import Home from "../components/home";
import LoginComponent from "../components/auth/Login";
import SignupComponent from "../components/auth/Signup";

export default function Router() {
  return (
    <BrowserRouter>
      <AppBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/signup' element={<SignupComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
