import "./css/App.css";
import { BrowserRouter} from "react-router-dom";
import { routes } from "./Routes";

function App() {
	return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
