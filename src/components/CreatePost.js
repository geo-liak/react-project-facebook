import axios from 'axios';
import { useContext } from 'react';
import '../css/App.css';
import { NewPost } from '../InfoContext';
import { url } from '../settings/settings';
import { imageList } from '../settings/settings';


export default function CreatePost(props) {
    const [newPost, setNewPost] = useContext(NewPost);

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
        const content = document.getElementById('content').value.split(/\r?\n/g);

       
        const imageNumber = imageList[Math.floor(Math.random() * imageList.length)];

        const newPost = {
            "date": getCurrentDate(),
            "content": content,
            "likes": 0,
            "shares": 0,
            "tags": [],
            "img": "https://picsum.photos/id/" + imageNumber + "/1200/800"
        }

        axios.post(url + '/posts', newPost)
            .then(res => {
                setNewPost(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="mb-3">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                    <textarea id="content" className="form-control" type="text" name="content" placeholder="Make a post..." />
                    <span className="input-group-btn">
                        <button className="btn btn-success btn-green" type="submit" name="post">Post</button>
                    </span>
                </div>
            </form>
        </div>
    )
}