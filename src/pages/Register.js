import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import { url } from "../settings/settings";

export default function Register() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [location, setLocation] = useState('');
	const [password, setPassword] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();

		let newUser = {
			"username": username,
			"location": location,
			"password": password
		}


		axios.post(url + '/users', newUser)
			.then(res => console.log(res))
			.catch(error => console.log(error));

		navigate("/login", { state: { newRegistration: true } });

	}

	const handleInputChange = (e) => {
		if (e.target.id === 'username') {
			setUsername(e.target.value);
		} else if (e.target.id === 'location') {
			setLocation(e.target.value);
		} else {
			setPassword(e.target.value);
		}


		if (
			document.getElementById("username").value !== "" &&
			document.getElementById("location").value !== "" &&
			document.getElementById("password").value !== ""
		) {
			document.getElementById("register").removeAttribute("disabled");
		} else {
			document.getElementById("register").setAttribute("disabled", "");
		}
	};

	// const handleRegister = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<>
			<form
				className='login-form-width border center-xy p-3 shadow'
				onSubmit={(e) => handleSubmit(e)}>
				<h4 className='text-center'> Don't have an account yet? Register!</h4>
				<div className='form-group'>
					<input
						onChange={(e) => handleInputChange(e)}
						id='username'
						className='form-control my-3 btn-lg'
						type='text'
						name='username'
						placeholder='Username'
					/>

					<input
						onChange={(e) => handleInputChange(e)}
						id='location'
						className='form-control my-3 btn-lg'
						type='text'
						name='location'
						placeholder='Location'
					/>

					<input
						onChange={(e) => handleInputChange(e)}
						id='password'
						className='form-control my-3 btn-lg'
						type='password'
						name='password'
						placeholder='Password'
					/>

					<div className='d-flex justify-content-center'>
						<input
							id='register'
							className='btn btn-success btn-register btn-lg'
							type='submit'
							name='register'
							value='Register'
							disabled
						/>
					</div>
				</div>
			</form>
		</>
	);
}
