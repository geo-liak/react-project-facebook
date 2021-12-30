import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
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
		<>
			<Navbar />

			<div className="container" >
				<div className="row">
					<div className="col-md-3 border">ΑΡΙΣΤΕΡΑ</div>
					<div className="col-md-6 border">
						
						<Header />
						<Post />
					</div>
					<div className="col-md-3 border text-end"> ΔΕΞΙΑ</div>

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
