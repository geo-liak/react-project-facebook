import '../css/App.css';

export default function ProfileEdit() {

    return (
        <div className="panel panel-default">
            <div className="panel-body">
              <h4>Edit profile</h4>
              <form method="post" action="">
                <div className="form-group">
                  <input className="form-control" type="text" name="status" placeholder="Status" value="" />
                </div>

                <div className="form-group">
                  <input className="form-control" type="text" name="location" placeholder="Location" value="" />
                </div>

                <div className="form-group">
                  <input className="btn btn-primary" type="submit" name="update_profile" value="Save" />
                </div>
              </form>
            </div>
          </div>
    );
}