import "./index.css";
// import "./custom-forms.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-hero-pattern w-full h-screen">
      <div className="h-full">
        <Nav />
        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          Hello world!
        </span> */}
        <Footer />
      </div>
    </body>
  );
}

export default App;
