import { useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Table from "./Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  // !Api call only for start server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://striver-backend-1.onrender.com/api/code"
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
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
