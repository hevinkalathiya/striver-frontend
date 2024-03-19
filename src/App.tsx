import "./App.css";
import Landing from "./components/Landing";
import Table from "./Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="max-w-full mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
