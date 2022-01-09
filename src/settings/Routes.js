import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginInfo from "../LoginInfoContext";
import Feed from "../pages/Feed"



export default function RouteDefinitions() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginInfo);

    useEffect(() => {
        // if (isLoggedIn === null) {
        //     console.log('isLoggedIn was null and will be set to false');
        //     setIsLoggedIn(false);
        // }

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

