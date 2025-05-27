import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import SubscribeForm from "./components/SubscribeForm";
import GameWindow from "./components/GameWindow";
import DinosaurGallery from "./components/DinosaurGallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
        <div className="bg-hero-pattern">
          <Nav />
          <Routes>
            {/* Main */}
            <Route
              path="/"
              element={
                <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <SubscribeForm />
                  {/* Right column */}
                  <GameWindow />
                  <CallToAction />
                  <Footer />
                </div>
              }
            />
            <Route path="/roadmap" element={<DinosaurGallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
