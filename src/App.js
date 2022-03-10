import "./App.css";
import Match from "./components/CreateMatch/Match";
import Update from "./components/Update/Update";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  axios.defaults.baseURL = "https://gamex-backend.herokuapp.com";

  return (
    <div
      className="App"
      style={{ backgroundColor: "black", width: "100%", height: "100%" }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Match />} />
          <Route exact path="/Update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
