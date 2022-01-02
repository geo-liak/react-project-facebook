import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import ProfileBrief from "../components/ProfileBrief";
import ProfileEdit from "../components/ProfileEdit";
import ProfileSections from "../components/ProfileSections";
import { url } from '../settings/settings'

export default function Feed(props) {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		if (typeof props.login === "undefined") {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, []);

	const handleClick = () => {
		setLoggedIn(!loggedIn);
	};

	useEffect(() => {
		// console.log('logged in ' + loggedIn);
	}, [loggedIn]);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(url + "/posts/").then((res) => {
			setPosts(res.data);
		})
	}, [])






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
							<div className="col-md-8 ">
								<div>
									<CreatePost />
								</div>
								<div>
									{posts.map((post) => {

										return (<Post key={post.id} {...post} />)
									})}
								</div>
							</div>
							<div className="col-md-4 border text-end">DEXIA</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)
	// (
	// 	<div>
	// 		This is the feed page. You are currentry{" "}
	// 		{loggedIn ? "logged in" : "logged out"}.
	// 		<br />
	// 		{loggedIn ? (
	// 			<button onClick={handleClick}>{"Log out"}</button>
	// 		) : (
	// 			<button onClick={handleClick}>{"Log in"}</button>
	// 		)}
	// 		<Post />
	// 	</div>
	// );
}
