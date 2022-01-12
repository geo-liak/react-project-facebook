import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import { url } from '../settings/settings';


export default function CreatePost(props) {
    const [response, setResponse] = useState();

    const getCurrentDate = () => {
        const date = new Date();

        const formattedDate = date.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
          });

          return formattedDate;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = document.getElementById('content').value;

        // A random image from picsum is going to be used
        const imageNumber = Math.floor(Math.random() * 1084);

        const newPost = {
            "date": getCurrentDate(),
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
                setResponse(res.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="mb-3">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                    <input id="content" className="form-control" type="text" name="content" placeholder="Make a post..." />
                    <span className="input-group-btn">
                        <button className="btn btn-success btn-green" type="submit" name="post">Post</button>
                    </span>
                </div>
            </form>
        </div>
    )
}