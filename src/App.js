import "./index.css";
import "./custom-forms.css";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-hero-pattern w-full h-screen m-0 p-0">
      <div className="App">
        <div className="h-full">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Hello world!
            </span>
          </header>
        </div>
      </div>
    </body>
  );
}

export default App;
