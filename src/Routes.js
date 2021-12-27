import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./pages/Feed"

export const routes = (
    <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/feed' element={<Feed />} />
    </Routes>
);