import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Qualification from "./Components/Qualification/Qualification";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Service from "./Components/Service/Service";
import Skills from "./Components/Skills/Skills";
import { Toaster } from "react-hot-toast";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <div className="main">
        <Home />
        {/* <Modal/> */}
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Work />
        <Contact />
      </div>
      <ScrollUp />
    </div>
  );
}

export default App;
