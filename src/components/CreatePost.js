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

        // For demosntration purposes, in order for new posts to present an image, a random image from picsum is going to be used.
        const imageList = 
        ["1026", "1027", "1028", "1029", "103", "1031", "1032", "1033", "1035", "1036", "1037", "1038", "039", "04", "040", "041", "042", "043", "1044", "1045", "1047", "1048", "1049", "1050", "1051", "1052", "1053", "1054", "1055", "1056", "0", "1", "10", "100", "1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008", "1009", "101", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1018", "1019", "102", "1020", "1021", "1022", "1023", "1024", "1025"]
        const imageNumber = imageList[Math.floor(Math.random() * imageList.length)];

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