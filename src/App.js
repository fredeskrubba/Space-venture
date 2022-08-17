import Nav from "./components/Nav";
import logo from "./images/logo.png";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

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
              route: "/Rumfærgen"
            },
            {
              name: "Ture",
              route: "/Ture"
            },
            {
              name: "Galleri",
              route: "/Galleri"
            },
            {
              name: "Sikkerhed",
              route: "/Sikkerhed"
            },
            {
              name: "Kontakt",
              route: "/Kontakt"
            },

          ]}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
