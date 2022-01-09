import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import LoginInfo from '../LoginInfoContext';

export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginInfo);

    const logOut = () => {
        setIsLoggedIn(false);
        localStorage.setItem('loggedIn', false);
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        } 
    }, [isLoggedIn])


    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">Facebook</a>
                </div>
                <div>
                    <button className='btn navbar-item'>Home</button>
                    <button className='btn navbar-item'>Profile</button>
                    <button onClick={logOut} className='btn navbar-item'>Logout</button>
                </div>
            </div>
        </nav>
    )
}