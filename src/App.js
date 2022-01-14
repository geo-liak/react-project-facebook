import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import RouteDefinitions from "./settings/Routes";
import React, { StrictMode, useState } from "react";
import { LoginInfo, UserInfo } from "./LoginInfoContext";


function App() {

	const [isLoggedIn, setIsLoggedIn] = useState((localStorage.getItem('loggedIn').toLowerCase().trim() === 'true'));
	const [loggedInUser, setLoggedInUser] = useState(null);


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
