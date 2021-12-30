import '../css/App.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">Facebook</a>
                </div>
                <div>
                    <button className='btn navbar-item'>Home</button>
                    <button className='btn navbar-item'>Profile</button>
                    <button className='btn navbar-item'>Logout</button>
                </div>
            </div>
        </nav>
    )
    }