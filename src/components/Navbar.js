import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import { LoginInfo, UserInfo } from '../LoginInfoContext';

export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginInfo);
    const [loggedInUser] = useContext(UserInfo);

    const handleClick = (e) => {
        console.log('Button \'' + e.target.innerText + '\' was clicked.');
    }

    const showProfile = () => {
        alert(loggedInUser.username.replace(loggedInUser.username.substring(0, 1), loggedInUser.username.charAt(0).toUpperCase()) + ' from ' + loggedInUser.location.replace(loggedInUser.location.substring(0, 1), loggedInUser.location.charAt(0).toUpperCase()));
    }

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
                    <a className="navbar-brand" href="/login">Facebook</a>
                </div>
                <div>
                    <span className='btn navbar-item'>{loggedInUser.username.replace(loggedInUser.username.substring(0, 1), loggedInUser.username.charAt(0).toUpperCase())}</span>
                    <button onClick={handleClick} className='btn navbar-item'>Home</button>
                    <button onClick={showProfile} className='btn navbar-item'>Profile</button>
                    <button onClick={logOut} className='btn navbar-item'>Logout</button>
                </div>
            </div>
        </nav>
    )
}