import { useEffect, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import Post from "../components/Post";

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
		console.log('logged in ' + loggedIn);
	}, [loggedIn]);

	return (
		<div>
			This is the feed page. You are currentry{" "}
			{loggedIn ? "logged in" : "logged out"}.
			<br />
			{loggedIn ? (
				<button onClick={handleClick}>{"Log out"}</button>
			) : (
				<button onClick={handleClick}>{"Log in"}</button>
			)}
			<Post />
		</div>
	);
}
