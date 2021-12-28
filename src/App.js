import "./css/App.css";
import { BrowserRouter} from "react-router-dom";
import { routes } from "./settings/Routes";

function App() {
	return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
