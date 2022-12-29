import { useState } from "react";
import Input from "./components/Input";
import "./css/App.css";
import { banner } from "./utils/commands";

function App() {
  const [cmdHistory, setCmdHistory] = useState<string[]>([""]);
  return (
    <div className="Input">
      <div>Welcome to interactive web terminal</div>
      <pre>{banner}</pre>
      {cmdHistory.map((cmd, index) => (
        <Input cmdHistory={cmdHistory} setCmdHistory={setCmdHistory} />
      ))}
    </div>
  );
}

export default App;
