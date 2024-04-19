import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Analytics } from "./pages/Analytics";
import { RSVP } from "./pages/RSVP";
import EventCreation from "./pages/EventCreation";
import { Home } from "./pages/Home";

const app = () => {
  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Analytics" element={<Analytics/>}/>
          <Route path="/RSVP" element={<RSVP/>}/>
          <Route path="/EventCreation" element={<EventCreation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default app;