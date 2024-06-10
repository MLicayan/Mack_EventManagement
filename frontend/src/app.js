import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import MaybeShowNavBar from "./components/MaybeShowNavBar";
import { Analytics } from "./pages/Analytics";
import { RSVP } from "./pages/RSVP";
import EventCreation from "./pages/EventCreation";
import { Home } from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ResearcherPage from "./pages/Researcher";

const app = () => {
  return(
    <div className="App">
      <Router>
        <MaybeShowNavBar>
          <Navbar/>
        </MaybeShowNavBar>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Analytics" element={<Analytics/>}/>
          <Route path="/RSVP" element={<RSVP/>}/>
          <Route path="/EventCreation" element={<EventCreation/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/Researcher" element={<ResearcherPage/>}/>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default app;