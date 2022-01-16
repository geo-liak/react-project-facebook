import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import ProfileBrief from "../components/ProfileBrief";
import ProfileSections from "../components/ProfileSections";
import Studies from "../components/Studies";
import { NewPost } from "../InfoContext";
import { url } from '../settings/settings';

export default function Feed(props) {
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({});

	const getPosts = () => {
		let data = axios.get(url + "/posts/")
			.then((res) => {
				setPosts(res.data);
			})
	}

	useEffect(() => {
		getPosts();
	}, [])

	useEffect(() => {
		getPosts();
	}, [newPost])

	return (
		<>
			<Navbar />

			<div className="container" >
				<div className="row">
					<div className="col-md-3 py-3">
						<ProfileBrief />
						<ProfileSections />
					</div>


					<div className="col-md-9 px-0 ">
						<div className="component-bg">
							<Header />
						</div>

						<div className="row">
							<NewPost.Provider value={[newPost, setNewPost]}>
								<div className="col-md-8 ">
									<div>
										<CreatePost />
									</div>
									<div>
										{posts.slice().reverse().map((post) => {

											return (<Post key={post.id} {...post} />)
										})}
									</div>
								</div>
							</NewPost.Provider>

							<div className="col-md-4 ps-0">
								<Studies />
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)
}
