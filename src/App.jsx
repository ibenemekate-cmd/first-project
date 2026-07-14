import Header from "./components/Header section/Header";
import Hero from "./components/Hero section/Hero";
import Clients from "./components/Clients section/Clients";
import Services from "./components/Service section/Service";
import Connect from "./components/Connect section/Connect";
import Security from "./components/Security-section/Security";


function App() {
  return(
    <div className="App">
      <Header/>
      <Hero/>
      < Clients/>
      <Services />
      <Connect />
      <Security />
    </div>
  )
}
  
       

export default App;
