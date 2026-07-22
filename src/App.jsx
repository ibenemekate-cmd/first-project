import Header from "./components/Header section/Header";
import Hero from "./components/Hero section/Hero";
import Clients from "./components/Clients section/Clients";
import Services from "./components/Service section/Service";
import Connect from "./components/Connect section/Connect";
import Security from "./components/Security-section/Security";
import Solution from "./components/Solution section/Solution";
import Footer from "./components/Footer section/Footer";


function App() {
  return(
    <div className="App">
      <Header/>
      <Hero/>
      < Clients/>
      <Services />
      <Connect />
      <Security />
      <Solution />
      <Footer />
    </div>
  )
}
  
       

export default App;
