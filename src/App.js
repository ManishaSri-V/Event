import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import EventForm from "./EventForm/EventForm";
import Navbar from "./Navbar/Navbar";
import EventList from "./EventList/EventList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EventForm />} />
          <Route path="/eventlist" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
