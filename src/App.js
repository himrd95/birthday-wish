import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundImage:
                    "url(https://raw.githubusercontent.com/himrd95/birthday-wish/main/public/background1.webp)",
            }}
        >
            <Home />
        </div>
    );
}

export default App;
