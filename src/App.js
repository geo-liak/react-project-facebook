import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import RouteDefinitions from "./settings/Routes";
import React, { StrictMode, useState } from "react";
import { LoginInfo, UserInfo } from "./LoginInfoContext";


function App() {

	const [isLoggedIn, setIsLoggedIn] = useState((sessionStorage.getItem('isLoggedIn') === null ? false : (sessionStorage.getItem('isLoggedIn').toLowerCase().trim() === 'true')));

	const [loggedInUser, setLoggedInUser] = useState(
		(sessionStorage.getItem('loggedInUser') === null) 
		? null 
		: JSON.parse(sessionStorage.getItem('loggedInUser')));


	return (
		<div>
			<StrictMode>
				<LoginInfo.Provider value={[isLoggedIn, setIsLoggedIn]} >
					<UserInfo.Provider value={[loggedInUser, setLoggedInUser]} >
						<BrowserRouter>
							<RouteDefinitions />
						</BrowserRouter>
					</UserInfo.Provider>
				</LoginInfo.Provider>
			</StrictMode>
		</div>
	)
}

export default App;
