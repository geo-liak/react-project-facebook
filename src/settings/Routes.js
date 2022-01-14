import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { LoginInfo } from "../LoginInfoContext";
import Feed from "../pages/Feed"



export default function RouteDefinitions() {
    const navigate = useNavigate();
    const [isLoggedIn] = useContext(LoginInfo);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn]);

    return (
        <Routes>
            <Route exact path='/' element={isLoggedIn === false ? <Login /> : <Feed />} />
            <Route exact path='/login' element={isLoggedIn === false ? <Login /> : <Feed />} />
            <Route exact path='/register' element={isLoggedIn === false ? <Register /> : <Feed />} />
            <Route exact path='/feed' element={isLoggedIn === false ? <Login /> : <Feed />} />
        </Routes>
    )
}

