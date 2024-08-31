import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import SubscribeForm from "./components/SubscribeForm";
import GameWindow from "./components/GameWindow";

function App() {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
      <div className="bg-hero-pattern">
        <Nav />
        {/* Main */}
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <SubscribeForm />
          {/* Right column */}
          <GameWindow />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
