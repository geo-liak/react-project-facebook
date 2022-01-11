import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import { url } from '../settings/settings';


export default function CreatePost(props) {
    const navigate = useNavigate();
    // const [lastUsedId, setLastUsedId] = useState();

    // useEffect(() => {
    //     setLastUsedId(props.lastUsedId)
    // }, [props.lastUsedId])


    const handleSubmit = (e) => {
        e.preventDefault();
        const content = document.getElementById('content').value;
        const imageNumber = Math.floor(Math.random() * 1084);

        const newPost = {
            "date": "18 December 2019",
            "content": [
                content
            ],
            "likes": 0,
            "shares": 0,
            "tags": [],
            "img": "https://picsum.photos/id/" + imageNumber + "/1200/800"
        }

        axios.post(url + '/posts', newPost)
            .then(res => {
                console.log(res.data);
                navigate('/feed');
            })
            .catch(error => {
                console.log(error);
            })

        console.log(newPost);
        // setLastUsedId(lastUsedId + 1);

    }


    return (
        <div className="mb-3">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                    <input id="content" className="form-control" type="text" name="content" placeholder="Make a post..." />
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="submit" name="post">Post</button>
                    </span>
                </div>
            </form>
        </div>
    )
}