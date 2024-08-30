import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import SubscribeForm from "./components/SubscribeForm";

function App() {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-hero-pattern w-full h-screen">
      <div className="h-full">
        <Nav />
        {/* Main */}
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <SubscribeForm />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
