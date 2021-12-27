import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/App.css";
import { url } from "../settings";

export default function Login(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);

	const newRegistration =
		(location.state && location.state.newRegistration) !== null
			? location.state.newRegistration
			: "";

	const handleRegisterClick = () => {
		navigate("/register");
	};

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("in login");

		axios.get(url + "/users/").then((res) => {
			setUsers(res.data);
		});
	};

	useEffect(() => {
		const inputUsername = document.getElementById("username").value;
		const inputPassword = document.getElementById("password").value;
		let userToLogin = null;

		userToLogin =  users.filter((user) => {
			if (user.username === inputUsername && user.password === inputPassword) {
				userToLogin = user;
			}
		});

		if (userToLogin !== null) {
			console.log(userToLogin);
		} else {
			console.log("no user found");
		}
	}, [users]);

	return (
		<>
			{/* <!-- login form --> */}
			<form
				className='login-form-width border shadow center-xy p-3'
				onSubmit={(e) => handleLogin(e)}>
				{newRegistration ? (
					<h6 className='registration-successful text-center'>
						You have successfully registered
					</h6>
				) : (
					""
				)}
				<h4 className='text-center'>Login to start enjoying unlimited fun!</h4>
				<div className='form-group'>
					<input
						id='username'
						className='form-control btn-lg my-3'
						type='text'
						name='username'
						placeholder='Username'
					/>
					<input
						id='password'
						className='form-control btn-lg my-3'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<input
						className='btn btn-primary btn-block btn-lg btn-width-100 py-2'
						type='submit'
						name='login'
						value='Login'
					/>
					<p className='text-line py-1'>
						<span>or</span>
					</p>
					<div className='d-flex justify-content-center'>
						<Button
							onClick={handleRegisterClick}
							className='btn-register btn-lg mb-2'>
							Register
						</Button>
					</div>
				</div>

				<div className='form-group'></div>

				<div className='form-group'></div>
			</form>
		</>
	);
}
