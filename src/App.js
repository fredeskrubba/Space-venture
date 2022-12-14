import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer";
import logo from "./images/logo.png";
import { links as navLinks } from "./components/navbar/navLinks";
import { icons as navIcons } from "./components/navbar/navLinks";
import { quickLinks } from "./components/navbar/navLinks";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Spaceship from "./pages/Spaceship";
import Trips from "./pages/Trips";
import Gallery from "./pages/Gallery";
import Security from "./pages/Security";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Nav 
          logo={logo}
          logoAlt="Page logo"
          links={navLinks}
          icons={navIcons}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Spaceship" element={<Spaceship/>}/>
          <Route path="/Trips" element={<Trips/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Security" element={<Security/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer
          phoneNum="+45 86 35 10 03"
          email="info@spaceventure.dk"
          address="Galaksevej 39, 8000 Århus"
          quickLinks={quickLinks}
          copyright="© 2021 Space Venture. All rights reserved."
          socials={navIcons}
        />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
