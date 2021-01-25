import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Image from "./components/image";
import EventBack from "./components/eventBackground";
import Highlights from "./components/highlights";
import Tickets from "./components/tickets";
import Precentage from "./components/precentage";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Header></Header>
      <Image></Image>
      <EventBack />
      <Highlights />
      <div className='container'>
      <div className="row">
        <div className="col-md-4 text-center">
          <Precentage/>
        </div>
        <div className="col-md-8">
          <Tickets />
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
