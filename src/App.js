
import { Route, Routes } from "react-router-dom";
// import Main from "./components/Main";
// import Signup from "./components/Singup";
import Weather from "./Components/Weather";

function App() {
	// const user = localStorage.getItem("token");

	return (
		<Routes>
			
			<Route path="/" exact element={<Weather />} />
			
		</Routes>
	);
}

export default App;