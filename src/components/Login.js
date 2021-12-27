import { Button } from "react-bootstrap";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import "../css/App.css";

export default function Login(props) {
	const location = useLocation();
	console.log(location.state);
	const newRegistration = (location.state && location.state.newRegistration) != undefined ? location.state.newRegistration : "";
	const navigate = useNavigate();
	const handleRegisterClick = () => {
		console.log("Register");
		navigate("/register");
	};

	return (
		<>
			{/* <!-- login form --> */}
				<form
					className='login-form-width border shadow center-xy p-3'
					method='post'
					action='home.html'>
						{newRegistration ? <h6 className='registration-successful text-center'>You have successfully registered</h6> : '' }
						<h4 className="text-center">Login to start enjoying unlimited fun!</h4>
					<div className='form-group'>
						<input
							className='form-control btn-lg my-3'
							type='text'
							name='username'
							placeholder='Username'
						/>
						<input
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
						<p className="text-line py-1"><span>or</span></p>
						<div className="d-flex justify-content-center">
						<Button onClick={handleRegisterClick} className='btn-register btn-lg mb-2'>
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
