import '../css/App.css';
import logo from '../data/img/logo.jpg'

export default function ProfileBrief() {

    return (

            <div className="panel panel-default">
                <div className="panel-body">
                    <img className='brief-img-border pb-2' src={logo} width="100%"  />
                    <h4>PeopleCert</h4>
                    <p>@peoplecert.org</p>
                </div>
            </div>
        
    )
}