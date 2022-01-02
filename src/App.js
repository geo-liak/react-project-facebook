import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./settings/Routes";
import { StrictMode } from "react";

function App() {
	return (
		<div>
			<StrictMode>
				<BrowserRouter>{routes}</BrowserRouter>;
			</StrictMode>
		</div>
	)
}

export default App;
