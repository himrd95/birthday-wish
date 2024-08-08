import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";

function App() {
    return (
        <div
            className="App"
            style={{ backgroundImage: "url(/background1.webp)" }}
        >
            <Home />
        </div>
    );
}

export default App;
