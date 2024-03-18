import "./App.css";
import Landing from "./components/Landing";
import Table from "./components/Table";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="max-w-full mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
