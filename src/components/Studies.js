import '../css/App.css';

export default function Studies() {

    return (
        <div className="panel panel-default component-bg p-2 text-start">
          <div className="panel-body">
            <h4 className="fontsize-small-title" >Studies</h4>
            <ul>
              <li>
                <a className="fontsize-small" href="#">Harvard University</a> 
                <a className="text-danger fontsize-small ps-1" href="#">[remove]</a>
              </li>
            </ul>
          </div>
        </div>
    )
}