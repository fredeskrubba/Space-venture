import Nav from "./components/Nav";
import logo from "./images/logo.png";
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
    <div className="App">
      <BrowserRouter>
        <Nav 
          logo={logo}
          logoAlt="Page logo"
          links={[
            {
              name: "Home",
              route: "/"
            },
            {
              name: "Rumfærgen",
              route: "/Spaceship"
            },
            {
              name: "Ture",
              route: "/Trips"
            },
            {
              name: "Galleri",
              route: "/Gallery"
            },
            {
              name: "Sikkerhed",
              route: "/Security"
            },
            {
              name: "Kontakt",
              route: "/Contact"
            },

          ]}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Spaceship" element={<Spaceship/>}/>
          <Route path="/Trips" element={<Trips/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Security" element={<Security/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
