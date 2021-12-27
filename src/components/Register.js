import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/App.css";

export default function Register() {
	const navigate = useNavigate();

	const handleInputChange = () => {
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

	const handleRegister = (e) => {
		e.preventDefault();
		navigate("/login", { state: { newRegistration: true } });
	};

	return (
		<>
			<form
				className='login-form-width border center-xy p-3 shadow'
				onSubmit={(e) => handleRegister(e)}>
				<h4 className='text-center'> Don't have an account yet? Register!</h4>
				<div className='form-group'>
					<input
						onChange={handleInputChange}
						id='username'
						className='form-control my-3 btn-lg'
						type='text'
						name='username'
						placeholder='Username'
					/>

					<input
						onChange={handleInputChange}
						id='location'
						className='form-control my-3 btn-lg'
						type='text'
						name='location'
						placeholder='Location'
					/>

					<input
						onChange={handleInputChange}
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
