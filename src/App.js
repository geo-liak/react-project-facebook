import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import RouteDefinitions from "./settings/Routes";
import React, { StrictMode, useState } from "react";
import LoginInfo from "./LoginInfoContext";


function App() {

	const [isLoggedIn, setIsLoggedIn] = useState((localStorage.getItem('loggedIn').toLowerCase().trim() === 'true'));


	return (
		<div>
			<StrictMode>
				<LoginInfo.Provider value={[isLoggedIn, setIsLoggedIn]} >
					<BrowserRouter>
						<RouteDefinitions />
					</BrowserRouter>
				</LoginInfo.Provider>
			</StrictMode>
		</div>
	)
}

export default App;
