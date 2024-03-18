import MonacoEditor from "react-monaco-editor";
import "./App.css";
import { useForm } from "react-hook-form";
import Landing from "./components/Landing";

interface FormData {
  username: string;
  language: string;
  stdin: string;
  sourceCode: string;
}

function App() {
  return (
    <div className="max-w-full mx-auto">
    <Landing />
    </div>
  );
}

export default App;
