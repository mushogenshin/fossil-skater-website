import "./index.css";
import "./custom-forms.css";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-hero-pattern">
      {/* <div className="App"> */}
      <div className="h-full">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Hello world!
          </span>
        </header>
      </div>
    </div>
  );
}

export default App;
