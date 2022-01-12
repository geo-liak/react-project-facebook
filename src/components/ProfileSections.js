import '../css/App.css';

export default function ProfileSections() {
    const handleClick = (e) => {
        console.log('Button \'' + e.target.innerText + '\' was clicked.');
    }

    return (
        <div>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Home</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Posts</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Events</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Videos</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Photos</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">About</button>
            <button onClick={handleClick} className="btn btn-outline w-100 text-start">Community</button>
            <button onClick={handleClick} className="btn btn-success btn-green text-start mt-4">Create Page</button>
        </div>
    )
}