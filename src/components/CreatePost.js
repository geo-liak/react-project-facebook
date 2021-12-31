import '../css/App.css';


export default function CreatePost() {
    return (
        <div className="mb-3">
            <form method="post" action="">
                <div className="input-group">
                    <input className="form-control" type="text" name="content" placeholder="Make a post..." />
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="submit" name="post">Post</button>
                    </span>
                </div>
            </form>
        </div>
    )
}